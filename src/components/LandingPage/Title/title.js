import React from "react";
import styles from "./title.module.scss";
import ActionButton from "../ActionButton/action-button";

const Title = () => (
  <div className={styles["wrapper"]}>
    <div className={styles["container"]}>
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
    </div>
  </div>
);

export default Title;
