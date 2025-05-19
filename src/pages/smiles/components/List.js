import SmileItem from "./Item";
import "./SmilesStyle.css";

export default function SmilesList(props) {
    const {smiles, voteForSmile} = props;
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