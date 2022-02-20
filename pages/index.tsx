import { Post } from 'ts';

import CurrentProjects from '../components/CurrentProjects';
import Divider from '../components/Divider';
import Introduction from '../components/Introduction';
import LatestBlogPosts from '../components/LatestBlogPosts';
import Layout from '../components/Layout';
import { getAllFilesFrontMatter } from '../lib/mdx';

type HomePageProps = {
  posts: Post[];
};

const HomePage = ({ posts }: HomePageProps) => {
  const latest3 = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
  return (
    <Layout>
      <Introduction />
      <Divider />
      <CurrentProjects />
      <Divider />
      <LatestBlogPosts posts={latest3} />
      <Divider />
    </Layout>
  );
};

export default HomePage;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter();

  return { props: { posts } };
}
