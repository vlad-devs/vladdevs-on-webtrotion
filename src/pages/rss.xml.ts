import rss from "@astrojs/rss";
// import { siteConfig } from "@/site-config";
// import { getAllPosts } from "@/utils";
import { getAllPosts, getDatabase } from "@/lib/notion/client";
import { getPostLink } from '../lib/blog-helpers'

export const GET = async () => {
  const [posts, database] = await Promise.all([getAllPosts(), getDatabase()])

  return rss({
    title: database.Title,
    description: database.Description,
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      title: post.Title,
      description: post.Excerpt,
      pubDate: new Date(post.Date),
      //link: `posts/${post.Slug}`,
      //TODO: find out which one to use
      link: new URL(getPostLink(post.Slug), import.meta.env.SITE).toString(),
    })),
  });
};
