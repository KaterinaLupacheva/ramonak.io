import React from "react";
import styles from "./card.module.scss";

const Card = (props) => {
  return (
    <div
      className={styles["card-container"]}
      style={{ background: props.isClicked ? " #f7a046" : "" }}
      onClick={() => props.showView(props.title)}
    >
      <div className={styles["image-container"]}>
        <img className={styles["image"]} src={props.image} />
      </div>
      <div className={styles["title"]} src={props.image}>
        {props.title}
      </div>
      <div className={styles["date"]}>{`last updated ${props.date}`}</div>
    </div>
  );
};

export default Card;
