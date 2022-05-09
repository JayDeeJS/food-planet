import React from "react";
import images from "../../img";
import styles from "./newproduct.module.css";
import {Counter} from "../counter/counter";

const SingleProduct = () => {
    return (
        <div className={styles.newProduct}>
            <img className={styles.newProductSize} src={images.newProduct} alt=""/>
            <div className={styles.newProductDesc}>
                <h4>Чизбургер</h4>
                <p className={styles.smallFont}>Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус
                    гриль, кетчуп, майонез</p>
                <h4>200 сом</h4>
                <div>
                    <Counter/>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;