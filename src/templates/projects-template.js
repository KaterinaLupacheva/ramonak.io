import React from "react";
import { graphql } from "gatsby";
import { Fade } from "react-reveal";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";
import { ProjectCard } from "../components/ProjectCard";
import { useSiteMetadata } from "../hooks";

const ProjectTemplate = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { title: siteTitle, projects } = useSiteMetadata();
  return (
    <Layout
      title={`${frontmatter.title} - ${siteTitle}`}
      description={frontmatter.description}
      socialImage={frontmatter.socialImage}
    >
      <Sidebar />
      <Page title={frontmatter.title}>
        {projects.map((project) => (
          <Fade bottom>
            <ProjectCard project={project} key={project.title} />
          </Fade>
        ))}
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query ProjectsPageBySlug($slug: String!) {
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

export default ProjectTemplate;
