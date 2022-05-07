import React from 'react';
import styles from './whyUs.module.css';
import images from "../../img";

const ReasonOne = () => {
    return (
        <div className={styles.outlineBrd}>
            <img src={images.delivery} alt=""/>
            <h4 className={styles.titleFont}>Мгновенная доставка</h4>
            <p className={styles.textFont}>Доставим заказанную вами еду за 30 минут + напиток в подарок</p>
        </div>
    );
};

export default ReasonOne;