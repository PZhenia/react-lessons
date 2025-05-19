import {useState, useEffect} from "react";
import SmilesHeader from "./components/Header.js";
import SmilesList from "./components/List.js";
import "./components/SmilesStyle.css";

export default function Smiles() {
    const initialSmiles = () => {
        const saved = localStorage.getItem("smiles");
        return saved
            ? JSON.parse(saved)
            : [
                {id: 1, smile: '🫠', votes: 0},
                {id: 2, smile: '🤩', votes: 0},
                {id: 3, smile: '🤪', votes: 0},
                {id: 4, smile: '🤨', votes: 0},
                {id: 5, smile: '🫨', votes: 0},
            ];
    };

    const [smiles, setSmiles] = useState(initialSmiles);
    const [showResult, setShowResult] = useState(false);
    const [winners, setWinners] = useState([])

    useEffect(() => {
        localStorage.setItem("smiles", JSON.stringify(smiles));
    }, [smiles]);

    const voteForSmile = (id) => {
        setSmiles(prevState => {
            return prevState.map(smile =>
                smile.id === id ? {...smile, votes: smile.votes + 1} : smile
            )
        });
    }

    const handleShowResult = () => {
        const maxVote = Math.max(...smiles.map(vote => vote.votes));
        const winners = smiles.filter(smile => smile.votes === maxVote);

        setShowResult(true);
        setWinners(winners);
    }

    const handleReset = () => {
        const resetSmiles = smiles.map(smile => ({...smile, votes: 0}));

        setSmiles(resetSmiles);
        setShowResult(false);
        setWinners([]);

        localStorage.removeItem("smiles");
    }

    return (
        <div className="container">
            <SmilesHeader />
            <SmilesList
                smiles={smiles}
                voteForSmile={voteForSmile}
            />

            <button onClick={handleShowResult}>Show Results</button>
            <button onClick={handleReset}>Reset</button>
            {winners && winners.length > 0 && (
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
            )}

        </div>
    )
}