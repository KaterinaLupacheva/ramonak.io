import "server-only";
import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import matter from "gray-matter";
import type { Post, PostMeta } from "./post-types";

export type { Post, PostMeta } from "./post-types";

const POSTS_DIRECTORY = path.join(process.cwd(), "content", "posts");

function parsePostFile(fileName: string): { draft: boolean; post: Post } {
  const source = fs.readFileSync(path.join(POSTS_DIRECTORY, fileName), "utf8");
  const { data, content } = matter(source);
  const required = [
    "title",
    "date",
    "slug",
    "category",
    "description",
    "socialImage",
  ] as const;

  for (const field of required) {
    if (typeof data[field] !== "string" || !data[field].trim()) {
      throw new Error(
        `${fileName}: missing required frontmatter field "${field}"`,
      );
    }
  }

  if (
    data.updated !== undefined &&
    (typeof data.updated !== "string" || !data.updated.trim())
  ) {
    throw new Error(`${fileName}: invalid frontmatter field "updated"`);
  }

  return {
    draft: data.draft === true,
    post: {
      title: data.title,
      date: data.date,
      updated: data.updated ?? data.date,
      slug: data.slug,
      category: data.category,
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      description: data.description,
      socialImage: data.socialImage,
      content,
    },
  };
}

function parsePost(fileName: string): Post {
  return parsePostFile(fileName).post;
}

type PostEntry = {
  fileName: string;
  metadata: PostMeta;
};

const getPostEntries = cache((): PostEntry[] =>
  fs
    .readdirSync(POSTS_DIRECTORY)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const { draft, post } = parsePostFile(fileName);
      const { content: _content, ...metadata } = post;

      return { draft, fileName, metadata };
    })
    .filter(({ draft }) => !draft)
    .sort((a, b) => b.metadata.date.localeCompare(a.metadata.date)),
);

export const getAllPostMetadata = cache((): PostMeta[] => {
  return getPostEntries().map(({ metadata }) => metadata);
});

export const getAllPostSlugs = cache((): string[] => {
  return getPostEntries().map(({ metadata }) => metadata.slug);
});

export const getPostBySlug = cache((slug: string): Post | undefined => {
  const entry = getPostEntries().find(({ metadata }) => metadata.slug === slug);
  return entry ? parsePost(entry.fileName) : undefined;
});

export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(toPostDate(date));
}

export function toPostDate(date: string): Date {
  return new Date(date.length === 10 ? `${date}T00:00:00Z` : date);
}
