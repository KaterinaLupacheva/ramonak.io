import React from "react";
import styles from "./cards-container.module.scss";
import Card from "./Card";

const CardsContainer = ({ data, showView }) => {
  return (
    <div className={styles["cards-container"]}>
      {data.map((item, idx) => (
        <Card
          key={idx}
          image={item.image}
          title={item.title}
          date={item.date}
          showView={showView}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
