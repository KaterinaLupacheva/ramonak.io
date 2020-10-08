import React, { useState } from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";
import { CardsContainer, Heroku } from "../components/DigitalGarden";
import { useSiteMetadata } from "../hooks";

const DigitalGardenTemplate = ({ children, pageContext }) => {
  const { title: siteTitle, digitalGarden } = useSiteMetadata();
  const { title, description, socialImage } = pageContext.frontmatter;
  const [view, setView] = useState(0);
  return (
    <Layout
      title={`${title} - ${siteTitle}`}
      description={description}
      socialImage={socialImage}
    >
      <Sidebar />
      <Page title={title}>
        {children}
        <CardsContainer data={digitalGarden} showView={(a) => setView(a)} />
        <div>{view === "Heroku" && <Heroku />}</div>
      </Page>
    </Layout>
  );
};

export default DigitalGardenTemplate;
