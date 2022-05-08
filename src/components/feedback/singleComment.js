import React from 'react';
import styles from "./feedback.module.css";
import images from "../../img";

const SingleComment = () => {
    return (
        <div className={styles.imgFrame}>
            <div className={styles.bgImg}>
                <img className={styles.headerImg} src={images.greyHole} alt=""/>
                <div className={styles.feedbackUser}>
                    <span className={styles.userName}>Сергей</span>
                    <img src={images.penIcon} alt=""/>
                </div>
                <p className={styles.textFont}>Большое спасибо! 5 пицц доставили даже быстрее чем планировалось. Пицца была горячая и всему коллективу понравилась! День Рождения прошел отлично! :)</p>
                <span className={styles.date}>02.07.2020</span>
            </div>
        </div>
    );
};

export default SingleComment;