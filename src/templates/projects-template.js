import React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import ProjectCard from '../components/ProjectCard/project-card';
import { useSiteMetadata } from '../hooks';

const ProjectTemplate = () => {
    const { title: siteTitle, subtitle: siteSubtitle, projects } = useSiteMetadata();
    return(
        <Layout title={siteTitle} description={siteSubtitle}>
            <Sidebar />
            <Page title={}>
                {projects.map(project => <ProjectCard project={project} key={project.title} />)}
            </Page>
        </Layout>
    )
};

export default ProjectTemplate;