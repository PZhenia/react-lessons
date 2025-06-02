import { useState, useEffect, useCallback, useMemo, createContext } from "react";

export const SmilesContext = createContext(null);

export default function SmilesProvider({ children }) {
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

    const voteForSmile = useCallback((id) => {
        setSmiles(prevState => {
            return prevState.map(smile =>
                smile.id === id ? {...smile, votes: smile.votes + 1} : smile
            )
        });
    }, []);

    const handleShowResult = useCallback(() => {
        const maxVote = Math.max(...smiles.map(vote => vote.votes));
        const winners = smiles.filter(smile => smile.votes === maxVote);

        setShowResult(true);
        setWinners(winners);
    }, [smiles]);

    const handleReset = useCallback(() => {
        const resetSmiles = smiles.map(smile => ({...smile, votes: 0}));

        setSmiles(resetSmiles);
        setShowResult(false);
        setWinners([]);

        localStorage.removeItem("smiles");
    }, [smiles]);

    const contextValue = useMemo(() => ({
        smiles,
        winners,
        voteForSmile,
        handleShowResult,
        handleReset,
        showResult
    }), [smiles, winners, voteForSmile, handleShowResult, handleReset, showResult]);

    return(
        <SmilesContext.Provider value={contextValue}>
            {children}
        </SmilesContext.Provider>
    )
}
