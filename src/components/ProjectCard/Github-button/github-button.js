import React, { useState } from 'react';
import {useSpring, animated} from 'react-spring';
import Icon from '../../Icon/Icon';
import getIcon from '../../../utils/get-icon';  
import styles from './github-button.module.scss';

const GithubButton = ({ href }) => {
    const [isHovered, setHovered] = useState(false);
    const props = useSpring({ transform: `scale(${isHovered ? 1.2 : 1})`});
    
    return(
    <animated.div className={styles['github-button']} 
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={props}
    >
        <a href={href} target='_blank'>
            <Icon name={'source'} icon={getIcon('github')} />
            <span>Source</span>
        </a>
    </animated.div>
)};

export default GithubButton;