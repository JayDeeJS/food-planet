import React, {useState} from "react";
import styles from "../newProduct/newproduct.module.css";
import styles2 from "../menu/menu.module.css";

export const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <div className={styles.btnFrame}>
                <button className={styles.btnCount} onClick={() => setCount(count => count - 1)}>-</button>
                <span>{count}</span>
                <button className={styles.btnCount} onClick={() => setCount(count => count + 1)}>+</button>
            </div>
            <div>
                <button className={styles.btnCart} >В КОРЗИНУ</button>
            </div>
        </>
    )
}

export const Counter2 = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <div className={styles2.properSpacing}>
                <button className={styles2.btnCount2} onClick={() => setCount(count => count - 1)}>-</button>
                <span>{count}</span>
                <button className={styles2.btnCount2} onClick={() => setCount(count => count + 1)}>+</button>
            </div>
            <button className={styles2.btnCart}>В КОРЗИНУ</button>
        </>
    )
}