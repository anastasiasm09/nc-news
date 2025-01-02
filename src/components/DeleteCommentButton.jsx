import { useState } from "react"
import Comments from "./Comments";
import { DeleteComment } from "../Api";

function DeleteCommentButton({comment_id, article_id, getComments}) {
    const [deleting, setDeleting] = useState(false);

    function handleDeleteComment() {
        setDeleting(true)

        DeleteComment(comment_id)
        .then(() => {
            setDeleting(false);
            getComments(article_id);
        })
    }
    
    return (
        <section className="delete-comment-card">
            <button onClick={handleDeleteComment}>
                {deleting ? "Deleting..." : "Delete comment"}
            </button>
        </section>
    )

}

export default DeleteCommentButton