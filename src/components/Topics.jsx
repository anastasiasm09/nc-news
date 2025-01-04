import { useEffect, useState } from "react"
import { ApiTopics } from "../Api";
import { Link } from "react-router-dom";


function Topics() {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        ApiTopics().then((data) => {
            setTopics(data.data.topics)
        })
    }, [])

    return (
        <section className="topics-list">
            {topics.map((topic) => {
                return (
                    <li key={topics.slug}>
                    <Link to={`/articles?topic=${topic.slug}`}><h3>{topic.slug}</h3></Link>
                    </li>
                )
            })}
        </section>
    )
}

export default Topics