import React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import ProjectCard from '../components/ProjectCard/project-card';
import { useSiteMetadata } from '../hooks';

const ProjectTemplate = () => {
    const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
    return(
        <Layout title={siteTitle} description={siteSubtitle}>
            <Sidebar />
            <ProjectCard />
        </Layout>
    )
};

export default ProjectTemplate;