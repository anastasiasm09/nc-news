import { useEffect, useState } from "react"
import { ApiArticles } from "../Api"

function Articles() {

    const [articles, setArticles] = useState();

    useEffect(() => {
        ApiArticles().then((pendingArticles) => {
            setArticles(pendingArticles.articles)
        })
    }, []);
    if (!articles) {
        return <p>loading...</p>
    };

    return (
        <>
            <div className="articles">
                <ul>
                    {articles.map((article) => {
                        return (
                            <li className="item" key={article.article_id}>
                            <p>{article.title}</p>
                            <img className="img" 
                            src={article.article_img_url} alt="" />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
        
    )

}

export default Articles
