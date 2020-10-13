import React from "react";
import styles from "./cards-container.module.scss";
import Card from "./Card";

const CardsContainer = ({ data, id }) => {
  return (
    <div className={styles["cards-container"]}>
      {data.map((item, idx) => (
        <Card
          key={idx}
          image={item.image}
          title={item.title}
          link={item.link}
          date={item.date}
          isClicked={idx === id}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
