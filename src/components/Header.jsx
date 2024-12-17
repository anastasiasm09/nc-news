import { Link } from "react-router-dom"

function Header({title}) {
    return (
        <header>
            <div className="wrapper">
            <h1 className="logo-title">{title}</h1>
            <nav>
                <Link className="articles" to="/articles"><p>Articles</p></Link>
                <Link className="topics" to="/topics"><p>Topics</p></Link>
                <Link className="my-account" to="/my-account"><p>My account</p></Link>
            </nav>
            </div>
        </header>
    )
}

export default Header