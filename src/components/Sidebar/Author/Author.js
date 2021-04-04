// @flow strict
import React, { useState } from "react";
import { withPrefix, Link } from "gatsby";
import map from "../../../../static/media/map.png";
import styles from "./Author.module.scss";
import * as flag from "./flag.png";

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string,
  },
  isIndex: ?boolean,
};

const Author = ({ author, isIndex }: Props) => {
  const [isVisible, toggleIsVisible] = useState(false);
  const container = "mapContainer";
  return (
    <div className={styles["author"]}>
      <div className={styles["author__container"]}>
        <Link to="/">
          <img
            src={withPrefix(author.photo)}
            className={styles["author__photo"]}
            width="75"
            height="75"
            alt={author.name}
          />
        </Link>
        <img src={flag} width="75" height="75" alt="flag" />
      </div>
      {isIndex === true ? (
        <h1 className={styles["author__title"]}>
          <Link className={styles["author__title-link"]} to="/">
            {author.name}
          </Link>
        </h1>
      ) : (
        <h2 className={styles["author__title"]}>
          <Link className={styles["author__title-link"]} to="/">
            {author.name}
          </Link>
        </h2>
      )}

      <p className={styles["author__subtitle"]}>
        Full-stack web developer, freelancer based in{" "}
        <span
          className={styles["belarus"]}
          onClick={() => toggleIsVisible(!isVisible)}
        >
          Belarus
        </span>{" "}
        (Europe).
      </p>
      <div className={styles[`${isVisible ? "visible" : ""}mapContainer`]}>
        <img className={styles.map} src={map} alt="Europe Map" />
      </div>
    </div>
  );
};

export default Author;
