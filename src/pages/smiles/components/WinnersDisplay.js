import {useContext} from "react";

import { SmilesContext } from "../../../contexts/SmilesContext";
import {ThemeContext} from "../../../contexts/ThemeContext";

export default function WinnersDisplay() {
    const { winners } = useContext(SmilesContext);
    const { theme } = useContext(ThemeContext);

    return (
        <div>
            {winners.length === 1 ? (
                <div>
                    Winner: {winners[0].smile} with {winners[0].votes} votes
                </div>
            ) : (
                <div>
                    Winners:
                    <ul>
                        {winners.map(winner => (
                            <li key={winner.id}>{winner.smile} with {winner.votes} votes</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}