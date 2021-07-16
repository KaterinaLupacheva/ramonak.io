import React from "react";
import styles from "./title.module.scss";
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
    <div className={styles["wrapper"]}>
      <Particles className={styles["particles"]} params={particlesOptions} />
      <animated.div className={styles["container"]} style={props}>
        <h1>
          Hello!
          <br />
          I'm Kate - a front-end developer at{" "}
          <a href="https://sikoba.com" target="_blank">
            Sikoba Ltd.
          </a>
        </h1>
        <h2>
          In my free time,
          <ul>
            <li>
              I write <a href="https://ramonak.io/posts">blog posts</a> about
              the new things that I learn
            </li>
            <li>
              develop some fun{" "}
              <a href="https://ramonak.io/projects">projects</a>
            </li>
            <li>
              contribute to an{" "}
              <a
                href="https://www.npmjs.com/settings/ramonak/packages"
                target="_blank"
              >
                open-source community
              </a>
            </li>
            <li>and do freelance jobs</li>
          </ul>
        </h2>
        <h2>
          My main tech stack includes:
          <ul>
            <li>React</li> <li>React Native</li> <li>TypeScript</li>
            <li>Node.js</li>
          </ul>
        </h2>
      </animated.div>
    </div>
  );
};

export default Title;
