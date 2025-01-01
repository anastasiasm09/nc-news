import { useState } from "react"

function Search() {
    const [search, setSearch] = useState("");

    function handleChange(e) {
        setSearch(e.target.value)
    };

    function handleSubmit(e) {
        e.preventDefault()
    }


    return (
        <section className="seach">
            <form onSubmit={handleSubmit}>
            <label>
                <input type="text" 
                placeholder="Search articles"
                onChange={handleChange}
                value={search}
                />
                <button className="button" type="submit">Search</button>
            </label>
            </form>
        </section>
    )
}
export default Search