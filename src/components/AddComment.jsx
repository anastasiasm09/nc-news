import { useEffect, useState } from "react"
import { PostANewComment } from "../Api";
import { data } from "react-router-dom";


function AddComment({article_id}) {
    const [comment, setComment] = useState("");
    const [pending, setPending] = useState(false);
 
    const handleSubmit = (event) => {
        event.preventDefault()
        setPending(true)

        const newComment = {
            username: "jessjelly",
            body: comment,
        }

        PostANewComment(article_id, newComment)
        .then(() => {
            setComment("");
            setPending(false);
        });
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value)
    }

    return (
        <section className="new-comment-card">
            <h3>Leave a Comment</h3>
            <form onSubmit={handleSubmit}>
                <textarea 
                    placeholder="Write your comment here..."
                    onChange={handleCommentChange}
                    value={comment}>
                </textarea>
                <button disabled={comment.length === 0} type="submit">
                    {pending ? "Submitting..." : "Submit" }
                </button>
            </form>
        </section>
    )

}

export default AddComment