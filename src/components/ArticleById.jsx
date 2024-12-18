import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { GetArticleById } from "../Api";

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
        <section className="selected-article">
            <img src={article.article_img_url} alt="" />
            <h2>{article.title}</h2>
            <h3>{article.body}</h3>
            <p>Author: {article.author}</p>
            <p>Topic: {article.topic}</p>
        </section>
    )
};

export default ArticleById