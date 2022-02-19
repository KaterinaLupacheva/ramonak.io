import { allPosts, Post } from 'contentlayer/generated';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useMDXComponent } from 'next-contentlayer/hooks';

export async function getStaticPaths() {
  console.log(allPosts);
  return {
    paths: allPosts.map((p: Post) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<{
  post: Post;
}> = async ({ params }) => {
  const post = allPosts.find((post: Post) => post.slug === params?.slug);

  return {
    props: {
      post,
    },
  };
};

const Page = ({ post }: { post: Post }) => {
  const Component = useMDXComponent(post.body.code);

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Component />
    </>
  );
};

export default Page;
