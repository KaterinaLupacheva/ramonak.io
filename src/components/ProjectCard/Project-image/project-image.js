import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import styles from "./project-image.module.scss";

const ProjectImage = ({ link, image }) => {
  const [isHovered, setHovered] = useState(false);
  const props = useSpring({ transform: `scale(${isHovered ? 1.1 : 1})` });

  return (
    <animated.div
      className={styles["image-container"]}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={props}
    >
      <a href={link} target="_blank">
        <img className={styles["project-image"]} src={image} />
      </a>
    </animated.div>
  );
};

export default ProjectImage;
