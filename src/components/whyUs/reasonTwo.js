import React from 'react';
import styles from "./whyUs.module.css";
import images from "../../img";

const ReasonTwo = () => {
    return (
        <div className={styles.outlineBrd}>
            <img src={images.freshProduct} alt=""/>
            <h4 className={styles.titleFont}>Свежие продукты</h4>
            <p className={styles.textFont}>Вся продукция хранится в хороших условиях тем самым продлевая срок хранения</p>
        </div>
    );
};

export default ReasonTwo;