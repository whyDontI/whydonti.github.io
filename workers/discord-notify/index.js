// Forwards "someone joined the public room" pings from the BlobDrive game to a Discord webhook.
// The webhook URL lives only in the DISCORD_WEBHOOK_URL secret, never in the site's public code.

const ALLOWED_ORIGINS = ["https://www.nikhilbuilds.xyz", "https://nikhilbuilds.xyz"];
const GAME_URL = "https://www.nikhilbuilds.xyz/products/blobdrive/";
const MIN_GAP_MS = 4000; // best-effort flood guard per isolate
let lastSent = 0;

function cors(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

// Names are typed by players: keep letters, numbers, spaces and a few safe marks only.
function cleanName(raw) {
  const s = String(raw ?? "").replace(/[^\p{L}\p{N} ._-]/gu, "").trim().slice(0, 16);
  return s || "Someone";
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    if (!ALLOWED_ORIGINS.includes(origin)) return new Response("forbidden", { status: 403 });
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors(origin) });
    if (request.method !== "POST") return new Response("method not allowed", { status: 405, headers: cors(origin) });

    let body;
    try { body = await request.json(); } catch { return new Response("bad request", { status: 400, headers: cors(origin) }); }

    const event = body && body.event;
    if (event !== "joined" && event !== "opened") return new Response("bad request", { status: 400, headers: cors(origin) });

    const now = Date.now();
    if (now - lastSent < MIN_GAP_MS) return new Response(null, { status: 204, headers: cors(origin) });
    lastSent = now;

    const name = cleanName(body.name);
    const players = Math.max(1, Math.min(8, Number(body.players) || 1));
    const content =
      event === "opened"
        ? `🚙 **${name}** is driving in the public room, hop in: ${GAME_URL}`
        : `🚙 **${name}** joined the public room (${players} driving now). Hop in: ${GAME_URL}`;

    const res = await fetch(env.DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "BlobDrive", content, allowed_mentions: { parse: [] } }),
    });
    return new Response(null, { status: res.ok ? 204 : 502, headers: cors(origin) });
  },
};
