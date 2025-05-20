import { useContext } from "react";
import { SmilesContext } from "../../../contexts/SmilesContext";

export default function SmilesButtons() {
    const { handleShowResult, handleReset } = useContext(SmilesContext);

    return (
        <div>
            <button onClick={handleShowResult}>Show Results</button>
            <button onClick={handleReset}>Reset Votes</button>
        </div>
    );
}
