import { useState, useEffect } from "react"
import SearchBar from "../Search_bar/Search_bar";
import List from "../List/List"
import Pagination from "../Pagination/Pagination"
import "./Main.css"

function Main () {

    const initialResults = []
    const [results, setResults] = useState(initialResults)
    const [page, setPage] = useState(1)
    const lsPage = localStorage.getItem("parkingPage")

    useEffect(() => {
        if (lsPage) setPage(+lsPage)
    },[lsPage])

    return (
        <div>
            <div className="divTitleMain">
                <span className="titleMain">Parking slot searcher</span>
            </div>
            <SearchBar results={results} setResults={setResults} page={page}/>
            <List results={results} page={page} />
            <Pagination results={results} page={page} setPage={setPage}/>
        </div>
    )
}

export default Main
