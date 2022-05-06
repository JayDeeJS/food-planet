import React from "react";
import styles from "./newproduct.module.css";

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
                <div className={styles.sectionTwo}>
                    <p className={styles.marginRight}>Сортировать по:</p>
                    <select name="sort">
                        <option value="default" selected>По умолчанию</option>
                        <option value="1">Выбор 1</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default NewProduct;