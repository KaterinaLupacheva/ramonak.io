import type { NextPage } from 'next';

import Divider from '../components/Divider';
import Introduction from '../components/Introduction';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Introduction />
      <Divider />
      {/* title and photo
      work (Matics, storehero, sikoba) -> see other projects (hobby projects, open source libraries)
      recent blog posts (see all)
short about (in my free time..., tech stack...) -> read more about me */}
    </Layout>
  );
};

export default Home;
