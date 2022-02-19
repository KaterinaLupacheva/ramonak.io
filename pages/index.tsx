import type { NextPage } from 'next';

import CurrentProjects from '../components/CurrentProjects';
import Divider from '../components/Divider';
import Introduction from '../components/Introduction';
import LatestBlogPosts from '../components/LatestBlogPosts';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Introduction />
      <Divider />
      <CurrentProjects />
      <Divider />
      <LatestBlogPosts />
    </Layout>
  );
};

export default Home;
