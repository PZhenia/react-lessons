import {useContext} from "react";

import {SmilesContext} from "../../../contexts/SmilesContext";

import styles from "../../../components/Layout/Styles.module.css";

export default function SmileItem({smile}) {
    const {voteForSmile} = useContext(SmilesContext);

    return (
        <div className={`${styles.smileItem}`}
             onClick={() => {
                 voteForSmile(smile.id);
             }}>
            <span>{smile.smile}</span> Votes: {smile.votes}
        </div>
    )
}