import { useEffect, useState } from "react";
import { GetArticleById } from "../Api";
import { GetCommentsByArticle } from "../Api";
import { data } from "react-router-dom";
import DeleteCommentButton from "./DeleteCommentButton";

function Comments({ article_id, handleDeleteComment }) {
    const [comments, setComments] = useState([])

    function getComments(article_id) {
        GetCommentsByArticle(article_id)
        .then((data) => {
            setComments(data.comments);
        })
    }

    useEffect(() => {
        getComments(article_id)
    }, [article_id])

    if (!comments.length) {
        return <p>No comments yet...</p>
    }

    return (
        <section className="comments-section">
            <h4>Comments:</h4>
            <div className="comments-container">
                {comments.map((comment) => {
                    return (
                        <li key={comment.comment_id}>
                            <p><strong>{comment.author}</strong> wrote:</p>
                            <p>{comment.body}</p>
                            <p>Votes: {comment.votes}</p>
                            <DeleteCommentButton comment_id={comment.comment_id} 
                            article_id={article_id} getComments={getComments}/>
                        </li>
                    )
                }
                )}
            </div>
        </section>
    )

}

export default Comments