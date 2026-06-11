import rss from "@astrojs/rss";
import { getPostSlug, getPosts } from "@/lib/posts";
import { siteDescription, siteTitle } from "@/lib/site";

export async function GET(context: { site: URL }) {
  const posts = await getPosts();

  return rss({
    title: siteTitle,
    description: siteDescription,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/posts/${getPostSlug(post)}/`,
      pubDate: post.data.pubDate,
    })),
  });
}
