import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { useSiteMetadata } from "../hooks";
import { Title, Description, ContactForm } from "../components/LandingPage";
import Sidebar from "../components/Sidebar";

const LandingPage = ({ data }) => {
  const { title: siteTitle, recentWork } = useSiteMetadata();
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout
      title={`${frontmatter.title} - ${siteTitle}`}
      description={frontmatter.description}
      socialImage={frontmatter.socialImage}
    >
      <Sidebar />
      <Title />
      <Description recentWork={recentWork} />
      <ContactForm />
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
