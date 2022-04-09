import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import readingTime from 'reading-time';
import rehypeCodeTitle from 'rehype-code-titles';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { Post } from 'ts';

import { formatDate } from './dates';

const root = process.cwd();

export async function getFiles() {
  return fs.readdirSync(path.join(root, 'posts'));
}

export async function getAllPaths() {
  const files = await getAllFilesFrontMatter();
  return files.map((file) => ({ params: { slug: file.slug } }));
}

export async function getFileBySlug(slug: string): Promise<{
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
  frontMatter: Post;
}> {
  const files = await getAllFilesFrontMatter();
  const file = files.find((file) => file.slug === slug);

  const { content, ...rest } = file;
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeCodeTitle, rehypePrismPlus, rehypeSlug],
    },
    scope: rest,
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      ...rest,
    },
  };
}

export async function getAllFilesFrontMatter() {
  const files = fs.readdirSync(path.join(root, 'posts'));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join(root, 'posts', postSlug), 'utf8');
    const { data, content } = matter(source);
    const publishedAtFormatted = formatDate(data.date);

    return [
      {
        ...data,
        publishedAtFormatted,
        content,
      },
      ...allPosts,
    ];
  }, []);
}

export function getLatest3Posts(posts: Post[]) {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 4);
}
