import React from "react";
import "./SmilesStyle.css";

class SmileItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="smile-item"
                onClick={() => {
                    this.props.voteForSmile(this.props.smile.id);
                }}>
                <span>{this.props.smile.smile}</span> Votes: {this.props.smile.votes}
            </div>
        )
    }
}

export default SmileItem;