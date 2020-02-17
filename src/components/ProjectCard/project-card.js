import React from 'react';
import styles from './project-card.module.scss';
import Tech from './Tech/tech';

const ProjectCard = ({ project }) => {
    return(
        <div className={styles['project-card-container']}>
            <h2 className={styles['project-name']}>
                {project.title}
            </h2>
            <div className={styles['project-container']}>
                <div className={styles['image-container']}>
                    <img className={styles['project-image']}
                        src={project.image}
                    />
                </div>
                <div className={styles['second-column']}>
                    <div className={styles['project-description']}>
                        {project.description}
                    </div>
                    <div className={styles['techs-container']}>
                        {project.techs.map(tech => <Tech tech={tech} />)}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;