import axios from "axios"

const api = axios.create({
    baseURL: "https://my-nc-news-hkjz.onrender.com/api"
})

function ApiArticles() {
    return api.get("/articles").then(({ data }) => {
        return data;
    })
}

function GetArticleById(article_id) {
    return api.get(`/articles/${article_id}`).then(({ data }) => {
        return data;
    })
}
export { ApiArticles, GetArticleById };