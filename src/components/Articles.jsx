import { useEffect, useState } from "react"
import { ApiArticles, GetArticleByTopic } from "../Api"
import { Link } from "react-router-dom";

function Articles() {
    const [articles, setArticles] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const topic = searchParams.get('topic')

        if (topic) {
            GetArticleByTopic(topic)
            .then((articles) => {
                setArticles(articles.articles)
                setIsLoading(false)
                setIsError(false)
            })
            .catch((err) => {
                setIsLoading(false)
                setIsError(true)
            })
        } else {
            ApiArticles()
            .then((articles) => {
                setArticles(articles.articles)
                setIsLoading(false)
                setIsError(false)
            })
            .catch((err) => {
                setIsLoading(false)
                setIsError(true)
            })
        }
    }, []);

    if (isLoading) {
        return <p>loading...</p>
    };

    if (isError) {
        return <p>Something went wrong! Try again later.</p>
    }

    return (
        <ul className="articles-list">
            {articles.map((article) => {
                return (
                    <li key={article.article_id}>
                    <Link to={`/articles/${article.article_id}`}><p>{article.title}</p></Link>
                    <img className="img" 
                    src={article.article_img_url} alt="" />
                    </li>
                    )
                })}
        </ul>
    )

}

export default Articles
