import React from "react";
import styles from './description.module.scss';

const Description = () => {
  return (
    <div className={styles['container']}>
      <img src="/media/projects/coffee-dashboard.JPG" />
      <div className={styles['description']}>
        text text text text text text text text text text text text text text
        text text text text text text text text text text
      </div>
    </div>
  );
};

export default Description;