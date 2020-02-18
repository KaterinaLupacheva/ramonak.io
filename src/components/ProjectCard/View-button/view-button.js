import React, { useState } from 'react';
import {useSpring, animated} from 'react-spring';
import styles from './view-button.module.scss';

const ViewButton = ({ href }) => {
    const [isHovered, setHovered] = useState(false);
    const props = useSpring({ transform: `scale(${isHovered ? 1.2 : 1})`});

    return(
    <animated.div className={styles['view-button']} 
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={props}
    >
        <a href={href} target='_blank'>
            <span>View</span>
        </a>
    </animated.div>
)};

export default ViewButton;