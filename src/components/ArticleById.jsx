import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { GetArticleById } from "../Api";
import Comments from "./Comments";
import VoteOnTheArticle from "./VoteOnTheArticle";
import AddComment from "./AddComment";

function ArticleById() {
    const { article_id } = useParams();
    const [article, setArticle] = useState();
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        GetArticleById(article_id)
        .then((data) => {
            setArticle(data.article)
        })
        .catch((err) => {
            setIsError(true)
        })
    }, [article_id]);

    if (!article) {
        return <p>loading...</p>
    }

    if (isError) {
        return <p>Something went wrong! Try again later.</p>
    }

    return (
        <section className="article-container">
            <img src={article.article_img_url} alt="" />
            <h2>{article.title}</h2>
            <h3>{article.votes}</h3>
            <VoteOnTheArticle article={article} />
            <h3>{article.body}</h3>
            <p>Author: {article.author}</p>
            <p>Topic: {article.topic}</p>
            <h2>{article.comment}</h2>
            <Comments article_id={article_id} />
            <AddComment article_id={article.article_id} />
        </section>
    )
};

export default ArticleById