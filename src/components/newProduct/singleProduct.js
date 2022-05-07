import React, {useState} from "react";
import images from "../../img";
import styles from "./newproduct.module.css";

const SingleProduct = () => {
    const [count, setCount] = useState(0);
    return (
        <div className={styles.newProduct}>
            <img className={styles.newProductSize} src={images.newProduct} alt=""/>
            <div className={styles.newProductDesc}>
                <h4>Чизбургер</h4>
                <p className={styles.smallFont}>Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус
                    гриль, кетчуп, майонез</p>
                <h4>200 сом</h4>
                <div>
                    <button id="increase" onClick={() => setCount(prevState => prevState - 1)}>-</button>
                    <span id="count">{count}</span>
                    <button id="decrease" onClick={() => setCount(prevState => prevState + 1)}>+</button>
                </div>
                <button>В КОРЗИНУ</button>
            </div>
        </div>
    )
}

export default SingleProduct;