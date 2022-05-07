import React from 'react';
import styles from "./whyUs.module.css";
import images from "../../img";

const ReasonThree = () => {
    return (
        <div className={styles.outlineBrd}>
            <img src={images.uniqueMenu} alt=""/>
            <h4 className={styles.titleFont}>Уникальное меню</h4>
            <p className={styles.textFont}>Ежедневно мы обновляем наше
                меню и том числе коктейльное</p>
        </div>
    );
};

export default ReasonThree;