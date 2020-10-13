import React from "react";
import styles from "./card.module.scss";
import { Link } from "gatsby";

const Card = (props) => {
  return (
    <Link to={props.link}>
      <div
        className={styles["card-container"]}
        style={{ background: props.isClicked ? " #f7a046" : "" }}
      >
        <div className={styles["image-container"]}>
          <img className={styles["image"]} src={props.image} />
        </div>
        <div className={styles["title"]} src={props.image}>
          {props.title}
        </div>
        <div className={styles["date"]}>{`last updated ${props.date}`}</div>
      </div>
    </Link>
  );
};

export default Card;
