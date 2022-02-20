import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import readingTime from 'reading-time';
import rehypeCodeTitle from 'rehype-code-titles';
import rehypePrismPlus from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';

const root = process.cwd();

export async function getFiles() {
  return fs.readdirSync(path.join(root, 'posts'));
}

export async function getFileBySlug(slug: string) {
  const source = fs.readFileSync(path.join(root, 'data', `${slug}.mdx`), 'utf8');

  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeCodeTitle, rehypePrismPlus],
    },
    scope: data,
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}

export async function getAllFilesFrontMatter() {
  const files = fs.readdirSync(path.join(root, 'posts'));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join(root, 'posts', postSlug), 'utf8');
    const { data } = matter(source);

    return [
      {
        ...data,
      },
      ...allPosts,
    ];
  }, [] as any[]);
}
