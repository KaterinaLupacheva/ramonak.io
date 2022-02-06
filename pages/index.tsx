import type { NextPage } from 'next';

import Introduction from '../components/Introduction';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Introduction />
    </Layout>
  );
};

export default Home;
