import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import { useSiteMetadata } from '../hooks';

const ProjectTemplate = ({ data }) => {
    const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
    return(
        <Layout title={siteTitle} description={siteSubtitle}>
            <Sidebar />
            <div>
                <h1>TEST</h1>
            </div>
        </Layout>
    )
};

// export const query = graphql`
//   query PageBySlug($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       html
//       frontmatter {
//         title
//         date
//         description
//         socialImage
//       }
//     }
//   }
// `;

export default ProjectTemplate;