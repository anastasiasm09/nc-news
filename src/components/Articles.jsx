import { useEffect, useState } from "react"
import { ApiArticles, GetArticleByTopic } from "../Api"
import { Link, useSearchParams } from "react-router-dom";

function Articles() {
    const [articles, setArticles] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const searchParamsTopic = new URLSearchParams(window.location.search);
        const topic = searchParamsTopic.get('topic')
        const sort_by = searchParams.get('sortBy') || 'created_at';
        const order = searchParams.get('order') || "ASC";

        if (topic) {
            GetArticleByTopic(topic, sort_by, order)
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
            ApiArticles(sort_by, order)
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
    }, [searchParams]);

    if (isLoading) {
        return <p>loading...</p>
    };

    if (isError) {
        return <p>Something went wrong! Try again later.</p>
    }

    return (
        <ul className="articles-list">
            <>
            <label>
                Sort articles by:
                <select
                value={searchParams.get('sortBy')}
                onChange={e => setSearchParams(
                    params => {
                        params.set('sortBy', e.target.value)
                        return params
                    }
                )}
                >
                <option value="created_at">Date</option>
                <option value="comment_count">Comment count</option>
                <option value="votes">Votes</option>
                </select>
            </label>
            <label>
                Order:
                <select
                value={searchParams.get('order')}
                onChange={e => setSearchParams(
                    params => {
                        params.set('order', e.target.value)
                        return params
                    }
                )}
                >
                <option value="ASC">Ascending </option>
                <option value="DESC">Descending</option>
                </select>
            </label>
            </>
            {articles.map((article) => {
                return (
                    <>
                        <li key={article.article_id}>
                        <Link to={`/articles/${article.article_id}`}><p>{article.title}</p></Link>
                        <img className="img" 
                        src={article.article_img_url} alt="" />
                        </li>
                    </>
                    )
            })}
        </ul>
    )

}

export default Articles
