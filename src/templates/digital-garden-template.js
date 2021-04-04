import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";
import { CardsContainer } from "../components/DigitalGarden";
import { useSiteMetadata, useSmoothScroll } from "../hooks";

const DigitalGardenTemplate = ({ children, pageContext }) => {
  const { title: siteTitle, digitalGarden } = useSiteMetadata();
  const { title, description, socialImage } = pageContext.frontmatter;
  const [viewId, setViewId] = useState();
  const [refToScroll, smoothScroll] = useSmoothScroll();

  const titles = digitalGarden.map((item) => item.title);
  const index = titles.indexOf(title);

  useEffect(() => {
    setViewId(index);
    if (index >= 0) {
      smoothScroll();
    }
  }, [viewId]);

  return (
    <Layout
      title={`${title} - ${siteTitle}`}
      description={description}
      socialImage={socialImage}
    >
      <Sidebar />
      <Page title="Digital Garden">
        <h2>
          A collection of short solutions to daily tech problems, notes, some
          thoughts and explorations that might convert into a blog post someday.
          My take on <i>Learn in public</i> concept.
        </h2>

        <CardsContainer data={digitalGarden} id={index} />
        <div ref={refToScroll}>{children}</div>
      </Page>
    </Layout>
  );
};

export default DigitalGardenTemplate;
