import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { useSiteMetadata } from "../hooks";
import Title from "../components/LandingPage/Title/title";
import Sidebar from "../components/Sidebar";
import Description from "../components/LandingPage/Description/description";

const LandingPage = ({ data }) => {
  const { title: siteTitle } = useSiteMetadata();
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout
      title={`${frontmatter.title} - ${siteTitle}`}
      description={frontmatter.description}
      socialImage={frontmatter.socialImage}
    >
      <Sidebar />
      <Title />
      <Description />
    </Layout>
  );
};

export default LandingPage;

export const query = graphql`
  query LandingPageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        description
        socialImage
      }
    }
  }
`;
