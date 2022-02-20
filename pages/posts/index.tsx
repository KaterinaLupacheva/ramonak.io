import BlogPostCard from 'components/BlogPostCard';
import { getAllFilesFrontMatter } from 'lib/mdx';
import { Post } from 'ts';

import Layout from '../../components/Layout';

type BlogPageProps = {
  posts: Post[];
};

export default function BlogPage({ posts }: BlogPageProps) {
  return (
    <Layout>
      {posts.map((post) => (
        <BlogPostCard post={post} key={post.title} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter();

  return { props: { posts } };
}
