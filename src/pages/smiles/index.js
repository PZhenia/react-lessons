import React from "react";
import SmilesHeader from "./components/Header.js";
import SmilesList from "./components/List.js";
import "./components/SmilesStyle.css";

class Smiles extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            smiles:
            localStorage.getItem("smiles") ?
                JSON.parse(localStorage.getItem("smiles"))
                :
                [
                {id: 1, smile: '🥰', votes: 0},
                {id: 2, smile: '😚', votes: 0},
                {id: 3, smile: '😝', votes: 0},
                {id: 4, smile: '🫢', votes: 0},
                {id: 5, smile: '🤤', votes: 0},
            ],
            showResult: false,
            winners: [],
        }
    }

    voteForSmile = (id) => {
        this.setState(prevState => {
            const updatedSmiles = prevState.smiles.map((smile) => {
                if(smile.id === id) {
                    return {...smile, votes: smile.votes + 1};
                }
                return smile;
            });
            localStorage.setItem("smiles", JSON.stringify(updatedSmiles));
            return {smiles: updatedSmiles};
        })
    }

    handleShowResult = () => {
        const maxVote = Math.max(...this.state.smiles.map(vote => vote.votes));
        const winners = this.state.smiles.filter(smile => smile.votes === maxVote);

        this.setState({
            showResult: true,
            winners: winners,
        })
    }

    handleReset = () => {
        const resetSmiles = this.state.smiles.map(smile => ({...smile, votes: 0}));

        this.setState({
            smiles: resetSmiles,
            showResult: false,
            winners: [],
        });
        localStorage.removeItem("smiles");
    }

    render() {
        return (
            <div className="container">
                <SmilesHeader />
                <SmilesList
                    smiles={this.state.smiles}
                    voteForSmile={this.voteForSmile}
                />

                <button onClick={this.handleShowResult}>Show Results</button>
                <button onClick={this.handleReset}>Reset</button>
                {this.state.winners && this.state.winners.length > 0 && (
                    <div>
                        {this.state.winners.length === 1 ? (
                            <div>
                                Winner: {this.state.winners[0].smile} with {this.state.winners[0].votes} votes
                            </div>
                        ) : (
                            <div>
                                Winners:
                                <ul>
                                    {this.state.winners.map(winner => (
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
}

export default Smiles;