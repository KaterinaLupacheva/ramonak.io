import React from "react";
import styles from "./description.module.scss";
import { Tech } from "../../ProjectCard";
import { Fade } from "react-reveal";
import { Link } from "gatsby";

const Description = ({ recentWork }) => {
  return (
    <>
      <div className={styles["container"]}>
        <h1>My Recent Work</h1>
        {recentWork.map((work, id) => (
          <Fade bottom key={id}>
            <div className={styles["section"]} key={work.title}>
              <div className={styles["image-wrapper"]}>
                <a href={work.link} target="_blank">
                  <img src={work.image} />
                </a>
              </div>
              <div className={styles["description"]}>
                <div className={styles["header"]}>
                  <h3>{work.title}</h3>
                  <span className={styles["badge"]}>{work.date}</span>
                </div>
                <div className={styles["text"]}>
                  {work.description}
                  <h5>Technologies used</h5>
                  <div className={styles["techs"]}>
                    {work.techs.map((tech) => (
                      <Tech tech={tech} key={tech} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
      <div className={styles["more-projects"]}>
        <Link to="/projects">
          <button>More projects</button>
        </Link>
      </div>
    </>
  );
};

export default Description;
