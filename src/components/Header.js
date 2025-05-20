import { useContext } from "react";

import { ThemeContext } from "../contexts/ThemeContext";

import styles from "./Styles.module.css";

export default function Header () {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${styles.header} ${styles[`mode-${theme}`]}`}>
            <h1>Header</h1>
        </div>
    )
}