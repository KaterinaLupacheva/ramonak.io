import React from 'react';
import styles from './project-card.module.scss';

const ProjectCard = ({ project }) => {
    return(
        <div className={styles['project-card-container']}>
            <h2 className={styles['project-name']}>
                {project.title}
            </h2>
            <img 
                src={project.image}
                width={'100'}
                height={'100'} />
        </div>
    )
};

export default ProjectCard;