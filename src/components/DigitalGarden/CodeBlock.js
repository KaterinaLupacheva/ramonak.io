import React from "react";
import styles from "./shared.module.scss";

const CodeBlock = ({ children }) => (
  <div className={styles["code"]}>{children}</div>
);

export default CodeBlock;
