import React from "react";
import styles from "./menu.module.css";
import images from "../../img";
import {Counter2} from "../counter/counter";

const SingleMenuItem = () => {
    return (
        <div className={styles.singleItem}>
            <div className={styles.singleItemContent}>
                <img className={styles.singleItemSize} src={images.singleItem} alt=""/>
                <h4 className={styles.properSpacing}>Мексиканская</h4>
                <span className={styles.textAlign}>Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез</span>
                <h4 className={styles.properSpacing}>200</h4>
                <div>
                    <Counter2/>
                </div>
            </div>
        </div>
    )
}

export default SingleMenuItem;