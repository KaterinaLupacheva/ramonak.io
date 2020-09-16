import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";
import { useSiteMetadata } from "../hooks";

const DigitalGardenTemplate = ({ children, pageContext }) => {
    const { title: siteTitle } = useSiteMetadata();
  const { title, description, socialImage } = pageContext.frontmatter;
  return (
    <Layout
      title={`${title} - ${siteTitle}`}
      description={description}
      socialImage={socialImage}
    >
      <Sidebar />
      <Page
         title={title}
      >
        {children}
      </Page>
    </Layout>
  );
};

export default DigitalGardenTemplate;
