import React from 'react';
import styles from './view-button.module.scss';

const ViewButton = ({ href }) => (
    <div className={styles['view-button']} >
        <a href={href} target='_blank'>
            <span>View</span>
        </a>
    </div>
);

export default ViewButton;