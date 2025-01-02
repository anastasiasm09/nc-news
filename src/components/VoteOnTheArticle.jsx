import { useState } from "react"
import { SetVote } from "../Api";

function VoteOnTheArticle({article}) {
    const [userHasVoted, setUserHasVoted] = useState(false);
    const [votesCount, setVotesCount] = useState(article.votes);

    function handleLikeClick() {
        const voteChange = userHasVoted ? -1 : 1
        SetVote(article.article_id, voteChange)
        .then(() => {
            setVotesCount((prevVotes) => prevVotes + voteChange)
            setUserHasVoted(!userHasVoted)
        })
    }

    return (
        <div className="vote">
            <h2 onClick={handleLikeClick}>
                Vote: {userHasVoted ? "♥️" : "🤍"}
            </h2>
            <p>Votes: {votesCount}</p>
        </div>
    )
}

export default VoteOnTheArticle