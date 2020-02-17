import React from 'react';
import styles from './project-card.module.scss';

const ProjectCard = () => {

    return(
        <div className={styles['project-card-container']}>
            <h2 className={styles['project-name']}>
                Tabata - Fitness App
            </h2>
        </div>
    )
};

export default ProjectCard;