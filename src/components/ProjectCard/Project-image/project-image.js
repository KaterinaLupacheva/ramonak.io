import React from 'react';
import styles from './project-image.module.scss';

const ProjectImage = ({link, image}) => (
    <div className={styles['image-container']}>
        <a href={link} target='_blank'>
            <img className={styles['project-image']}
                src={image}
            />
        </a>
    </div>
);

export default ProjectImage;