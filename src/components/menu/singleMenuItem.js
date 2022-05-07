import React from "react";
import styles from "./menu.module.css";
import images from "../../img";

const SingleMenuItem = () => {
    return (
        <div className={styles.singleItem}>
            <div className={styles.singleItemContent}>
                <img className={styles.singleItemSize} src={images.singleItem} alt=""/>
                <h4 className={styles.properSpacing}>Мексиканская</h4>
                <span className={styles.textAlign}>Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез</span>
                <h4 className={styles.properSpacing}>200</h4>
                <div className={styles.properSpacing}>
                    <button className={styles.counterButtons}>-</button>
                    <span>1</span>
                    <button className={styles.counterButtons}>+</button>
                </div>
                <button className={styles.cartBtn}>В КОРЗИНУ</button>
            </div>
        </div>
    )
}

export default SingleMenuItem;