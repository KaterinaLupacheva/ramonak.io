import BlogLayout from 'components/Layout/BlogLayout';
import { getAllPaths, getFileBySlug } from 'lib/mdx';
import Link from 'next/link';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Post } from 'ts';

import Layout from '../../components/Layout';
import components from '../../components/MDXComponents';

type PostPageProps = {
  post: { mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>; frontMatter: Post };
};

export default function PostPage({ post }: PostPageProps) {
  const { mdxSource, frontMatter } = post;

  return (
    // <Layout>
    //   <div className="post-header">
    //     <h1>{frontMatter.title}</h1>
    //     {frontMatter.description && <p className="description">{frontMatter.description}</p>}
    //   </div>
    //   <main>
    //     <MDXRemote {...mdxSource} components={components} />
    //   </main>

    //   <style jsx>{`
    //     .post-header h1 {
    //       margin-bottom: 0;
    //     }
    //     .post-header {
    //       margin-bottom: 2rem;
    //     }
    //     .description {
    //       opacity: 0.6;
    //     }
    //   `}</style>
    // </Layout>
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
