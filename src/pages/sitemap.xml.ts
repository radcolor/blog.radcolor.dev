import { getPostSlug, getPosts, getTags, slugifyTag } from "@/lib/posts";
import { siteUrl } from "@/lib/site";

export async function GET() {
  const posts = await getPosts();
  const tags = await getTags();
  const urls = [
    "",
    ...posts.map((post) => `/posts/${getPostSlug(post)}/`),
    ...tags.map((tag) => `/tags/${slugifyTag(tag)}/`),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${new URL(path, siteUrl).toString()}</loc>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
