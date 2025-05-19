import React from "react";
import SmileItem from "./Item";
import "./SmilesStyle.css";

class SmilesList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {smiles, voteForSmile} = this.props;

        return (
            <div className="smiles-list">
                {smiles.map((smile) => (
                    <SmileItem
                        key={smile.id}
                        smile={smile}
                        voteForSmile={voteForSmile}
                    />
                ))}
            </div>
        )
    }
}

export default SmilesList;