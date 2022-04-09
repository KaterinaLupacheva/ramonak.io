import BlogLayout from 'components/Layout/BlogLayout';
import { getAllPaths, getFileBySlug } from 'lib/mdx';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Post } from 'ts';

import components from '../../components/MDXComponents';

type PostPageProps = {
  post: { mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>; frontMatter: Post };
};

export default function PostPage({ post }: PostPageProps) {
  const { mdxSource, frontMatter } = post;

  return (
    <BlogLayout post={frontMatter}>
      <main>
        <MDXRemote {...mdxSource} components={components} />
      </main>
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPaths();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug(params.slug);

  return { props: { post } };
}
