# BlobDrive → Discord notifier

A tiny Cloudflare Worker (free tier is plenty). The game posts `{event, name, players}` here and the Worker
sends a fixed-format message to your Discord webhook. The webhook URL stays a secret on the Worker, so it is
never in the public site or in git.

## Deploy

```sh
cd workers/discord-notify
npx wrangler login
npx wrangler secret put DISCORD_WEBHOOK_URL     # paste the webhook URL when asked
npx wrangler deploy                              # prints https://blobdrive-notify.<you>.workers.dev
```

Then set `NOTIFY_URL` near the top of `public/products/blobdrive/index.html` to that Worker URL and push.

## Safety

- Only requests from nikhilbuilds.xyz are accepted, and only the two fixed message shapes are possible.
- Names are stripped to letters, numbers and a few marks; `@everyone` and other mentions are disabled.
- A best-effort 4 second gap between messages limits floods. For a hard limit, add a Cloudflare rate-limiting rule.
