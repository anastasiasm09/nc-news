import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { GetArticleById } from "../Api";
import Comments from "./Comments";
import VoteOnTheArticle from "./VoteOnTheArticle";

function ArticleById() {
    const { article_id } = useParams();
    const [article, setArticle] = useState();
    

    useEffect(() => {
        GetArticleById(article_id)
        .then((data) => {
            setArticle(data.article)
        })
    }, [article_id]);

    if (!article) {
        return <p>loading...</p>
    }

    return (
        <section className="article-container">
            <img src={article.article_img_url} alt="" />
            <h2>{article.title}</h2>
            <h3>{article.votes}</h3>
            <VoteOnTheArticle article={article}/>
            <h3>{article.body}</h3>
            <p>Author: {article.author}</p>
            <p>Topic: {article.topic}</p>
            <h2>{article.comment}</h2>
            <Comments article_id={article_id} />
        </section>
    )
};

export default ArticleById