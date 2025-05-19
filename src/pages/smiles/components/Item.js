import "./SmilesStyle.css";

export default function SmileItem(props) {
    const {smile, voteForSmile} = props;
    return (
        <div className="smile-item"
             onClick={() => {
                 voteForSmile(smile.id);
             }}>
            <span>{smile.smile}</span> Votes: {smile.votes}
        </div>
    )
}