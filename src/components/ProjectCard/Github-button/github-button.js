import React from 'react';
import Icon from '../../Icon/Icon';
import getIcon from '../../../utils/get-icon';  
import styles from './github-button.module.scss';

const GithubButton = ({ href }) => (
    <div className={styles['github-button']} >
        <a href={href} target='_blank'>
            <Icon name={'source'} icon={getIcon('github')} />
            <span>Source</span>
        </a>
    </div>
);

export default GithubButton;