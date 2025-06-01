import {useContext} from "react";

import SmileItem from "./Item";

import {SmilesContext} from "../../../contexts/SmilesContext";

import styles from "../../../components/Layout/Styles.module.css";

export default function SmilesList() {
    const {smiles} = useContext(SmilesContext);

    return (
        <div className={`${styles.smilesList}`}>
            {smiles.map((smile) => (
                <SmileItem
                    key={smile.id}
                    smile={smile}
                />
            ))}
        </div>
    )
}