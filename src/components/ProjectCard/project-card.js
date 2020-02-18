import React from 'react';
import styles from './project-card.module.scss';
import ProjectImage from './Project-image/project-image';
import Tech from './Tech/tech';
import GihubButton from './Github-button/github-button';
import ViewButton from './View-button/view-button';

const ProjectCard = ({ project }) => {
    return(
        <div className={styles['project-card-container']}>
            <h2 className={styles['project-name']}>
                {project.title}
            </h2>
            <div className={styles['project-container']}>
                <div className={styles['first-column']}>
                    <ProjectImage link={project.link} image={project.image} />
                    <div className={styles['buttons-container']}>
                        <GihubButton href={project.sourceCode} />
                        <ViewButton href={project.link} />
                    </div>
                </div>
                <div className={styles['second-column']}>
                    <div className={styles['project-description']}>
                        {project.description}
                    </div>
                    <div className={styles['techs-container']}>
                        {project.techs.map(tech => <Tech tech={tech} key={tech} />)}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;