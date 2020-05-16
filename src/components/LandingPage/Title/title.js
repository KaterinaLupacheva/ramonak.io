import React from "react";
import styles from "./title.module.scss";
import ActionButton from "../ActionButton/action-button";
import { useSpring, animated } from "react-spring";
import Particles from "react-particles-js";

const Title = () => {
  const props = useSpring({
    from: { transform: "translate(100%,0)" },
    to: { transform: "translate(0,0)" },
    config: { duration: 700 },
  });

  const particlesOptions = {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      line_linked: {
        enable: true,
        opacity: 0.01,
      },
      move: {
        direction: "right",
        speed: 0.2,
      },
      size: {
        value: 1,
      },
      opacity: {
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.05,
        },
      },
    },
    interactivity: {
      events: {
        onclick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        push: {
          particles_nb: 1,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <>
      <div className={styles["wrapper"]}>
        <Particles className={styles["particles"]} params={particlesOptions} />
        <animated.div className={styles["container"]} style={props}>
          <h1>
            Hello!
            <br />
            I'm a Full-Stack Web Developer. I specialize in{" "}
            <span className={styles["highlighter"]}>Dashboards</span> and{" "}
            <span className={styles["highlighter"]}>Admin Panels</span>{" "}
            building. <br />
            I'm available for freelance work and projects.
          </h1>
          <ActionButton />
        </animated.div>
      </div>
    </>
  );
};

export default Title;
