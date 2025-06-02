import { NavLink } from "react-router";

import { useContext } from "react";

import { ThemeContext } from "../../../contexts/ThemeContext";

import styles from "../Styles.module.css";

export default function Header () {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${styles.header} ${styles[`mode-${theme}`]}`}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
            <NavLink to="/todos-redux">Todo</NavLink>
        </div>
    )
}