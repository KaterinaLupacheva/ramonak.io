import React from "react";
import styles from "./cards-container.module.scss";
import { useSiteMetadata } from "../../hooks";
import Card from "./Card";

const CardsContainer = () => {
  const { digitalGarden } = useSiteMetadata();
  return (
    <div className={styles["cards-container"]}>
      {digitalGarden.map((item) => (
        <Card image={item.image} title={item.title} date={item.date} />
      ))}
    </div>
  );
};

export default CardsContainer;
