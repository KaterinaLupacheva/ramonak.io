import React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import ProjectCard from '../components/ProjectCard/project-card';
import { useSiteMetadata } from '../hooks';

const ProjectTemplate = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    console.log('DATA ' + JSON.stringify(frontmatter, null, 2))
    const { title: siteTitle, projects } = useSiteMetadata();
    return(
        <Layout title={`${frontmatter.title} - ${siteTitle}`} description={frontmatter.description} socialImage={frontmatter.socialImage}>
            <Sidebar />
            <Page title={frontmatter.title}>
                {projects.map(project => <ProjectCard project={project} key={project.title} />)}
            </Page>
        </Layout>
    )
};

export const query = graphql`
  query ProjectsPageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
        socialImage
      }
    }
  }
`;

export default ProjectTemplate;