import { getAllPaths, getFileBySlug } from 'lib/mdx';
import Link from 'next/link';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import Layout from '../../components/Layout';

type PostPageProps = {
  post: { mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>; frontMatter: any };
};

export default function PostPage({ post }: PostPageProps) {
  const { mdxSource, frontMatter } = post;

  return (
    <Layout>
      <header>
        <nav>
          <Link href="/">
            <a>👈 Go back home</a>
          </Link>
        </nav>
      </header>
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
        {frontMatter.description && <p className="description">{frontMatter.description}</p>}
      </div>
      <main>
        <MDXRemote {...mdxSource} />
      </main>

      <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }
        .post-header {
          margin-bottom: 2rem;
        }
        .description {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
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
