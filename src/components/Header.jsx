import { Link } from "react-router-dom"

function Header({title, search}) {
    return (
        <header className="wrapper">
            <Link to="/"><h1 className="logo-title">{title}</h1></Link>
            <h3>{search}</h3>
            <nav>
                <Link className="articles" to="/articles"><p>Articles</p></Link>
                <Link className="topics" to="/topics"><p>Topics</p></Link>
                <Link className="my-account" to="/my-account"><p>My account</p></Link>
            </nav>
        </header>
    )
}

export default Header