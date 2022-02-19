import { allPosts, Post } from 'contentlayer/generated';
import Head from 'next/head';
import type { FC } from 'react';

export async function getStaticPaths() {
  console.log(allPosts);
  const paths = allPosts.map((_) => '/posts/' + _._raw.flattenedPath);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((_) => _._raw.flattenedPath === params.id);
  return {
    props: {
      post,
    },
  };
}

const Page: FC<{ post: Post }> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article>
        <h1>{post.title}</h1>
        <div></div>
        <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </article>
    </>
  );
};

export default Page;
