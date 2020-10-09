import React, { useState } from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";
import { CardsContainer, Heroku, Git } from "../components/DigitalGarden";
import { useSiteMetadata } from "../hooks";

const DigitalGardenTemplate = ({ children, pageContext }) => {
  const { title: siteTitle, digitalGarden } = useSiteMetadata();
  const { title, description, socialImage } = pageContext.frontmatter;
  const [viewId, setViewId] = useState();

  const titles = digitalGarden.map((item) => item.title);

  const displayData = (clicked) => {
    setViewId(titles.indexOf(clicked));
  };

  return (
    <Layout
      title={`${title} - ${siteTitle}`}
      description={description}
      socialImage={socialImage}
    >
      <Sidebar />
      <Page title={title}>
        {children}
        <CardsContainer
          data={digitalGarden}
          showView={(a) => displayData(a)}
          id={viewId}
        />
        <div>
          {viewId === 0 && <Heroku />}
          {viewId === 1 && <Git />}
        </div>
      </Page>
    </Layout>
  );
};

export default DigitalGardenTemplate;
