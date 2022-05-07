import React from 'react';
import styles from "./whyUs.module.css";
import images from "../../img";

const ReasonFour = () => {
    return (
        <div className={styles.outlineBrd}>
            <img src={images.location} alt=""/>
            <h4 className={styles.titleFont}>Доставка</h4>
            <p className={styles.textFont}>Мы быстро доставляем вашу еду по указанному адресу</p>
        </div>
    );
};

export default ReasonFour;