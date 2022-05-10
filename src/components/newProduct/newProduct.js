import React from "react";
import styles from "./newproduct.module.css";
import SingleProduct from "./singleProduct";

const NewProduct = () => {
    return (
        <>
            <div className={styles.viewport}>
                <div className={styles.sectionOne}>
                    <div className={styles.navBar}>
                        <span className={styles.navText}>Новинки</span>
                        <div className={styles.navDivider}>
                            <div className={styles.navBarContent}>
                                <nav>
                                    <ul className={styles.navMenu}>
                                        <li>Пицца</li>
                                        <li>Бургер</li>
                                        <li>Суши</li>
                                        <li>Роллы</li>
                                        <li>Салаты</li>
                                        <li>Десерты</li>
                                        <li>Напитки</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.sectionThree}>
                    <SingleProduct/>
                    <SingleProduct/>
                    <SingleProduct/>
                    <SingleProduct/>
                </div>
            </div>
        </>
    )
}

export default NewProduct;