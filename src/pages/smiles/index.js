import SmilesHeader from "./components/Header.js";
import SmilesList from "./components/List.js";
import WinnersDisplay from "./components/WinnersDisplay.js";
import SmilesButtons from "./components/Buttons";

import SmilesProvider from "../../contexts/SmilesContext";

import styles from "../../components/Styles.module.css";

export default function Smiles() {
    return (
        <div className={`${styles.container}`}>
            <SmilesProvider>
                <SmilesHeader />
                <SmilesList />
                <SmilesButtons />
                <WinnersDisplay />
            </SmilesProvider>
        </div>
    )
}