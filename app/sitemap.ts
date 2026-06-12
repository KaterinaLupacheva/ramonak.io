import type { MetadataRoute } from "next";
import { getAllPostMetadata, toPostDate } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/projects", "/posts", "/contact"].map(
    (path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
      changeFrequency:
        path === "/posts" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : path === "/contact" ? 0.5 : 0.8,
    }),
  );

  const posts = getAllPostMetadata().map((post) => ({
    url: `${siteConfig.url}/posts/${post.slug}`,
    lastModified: toPostDate(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...pages, ...posts];
}
