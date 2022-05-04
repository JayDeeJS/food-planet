import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./nav.module.css";

const Nav = () => {
    return (
        <nav>
            <ul className={styles.navMenu}>
                <li className={styles.navLogo}></li>
                <NavLink to="/">
                    <li>Главная</li>
                </NavLink>
                <NavLink to="/menu">
                    <li>Меню</li>
                </NavLink>
                <NavLink to="/delivery">
                    <li>Доставка</li>
                </NavLink>
                <NavLink to="/contacts">
                    <li>Контакты</li>
                </NavLink>
                <NavLink style={{display: "flex"}} to="/phone">
                    <div className={styles.navImg1}></div>
                    <li>+996500405988</li>
                </NavLink>
                <NavLink style={{display: "flex"}} to="cart">
                    <div className={styles.navImg2}></div>
                    <li>1</li>
                </NavLink>
            </ul>
        </nav>
    );
};

export default Nav;