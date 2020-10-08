import React from 'react';
import styles from './cards-container.module.scss';

const CardsContainer = ({children}) => (
    <div className={styles["cards-container"]}>
        {children}
    </div>
);

export default CardsContainer;