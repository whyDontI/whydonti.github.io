// import { getCollection } from "astro:content"; // needed again once Writing is un-hidden

export async function GET() {
  const site = "https://www.nikhilbuilds.xyz";

  // Writing is hidden until there's something to publish, so it's left out of the
  // sitemap for now. To bring it back: add "/writing" to staticRoutes and uncomment below.
  const staticRoutes = ["/", "/projects", "/resume", "/contact"];

  // const posts = await getCollection("writing", ({ data }) => !data.draft);
  // const postRoutes = posts.map((post) => `/writing/${post.slug}`);
  const postRoutes: string[] = [];

  const urls = [...staticRoutes, ...postRoutes];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${site}${url}</loc></url>`).join("\n")}
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
}
