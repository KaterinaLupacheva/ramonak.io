import React from "react";
import styles from "./title.module.scss";
import ActionButton from "../ActionButton/action-button";
import { useSpring, animated } from "react-spring";

const Title = () => {
  const props = useSpring({
    from: { transform: "translate(100%,0)" },
    to: { transform: "translate(0,0)" },
    config: { duration: 700 },
  });
  return (
    <div className={styles["wrapper"]}>
      <animated.div className={styles["container"]} style={props}>
        <h1>
          Hello!
          <br />
          I'm a Full-Stack Web Developer. I specialize in{" "}
          <span className={styles["highlighter"]}>Dashboards</span> and{" "}
          <span className={styles["highlighter"]}>Admin Panels</span> building.{" "}
          <br />
          I'm available for freelance work and projects.
        </h1>
        <ActionButton />
      </animated.div>
    </div>
  );
};

export default Title;
