import { useState } from "react"
import SearchBar from "../Search_bar/Search_bar";
import List from "../List/List"
import Pagination from "../Pagination/Pagination"
import "./Main.css"

function Main () {

    const lsPage = localStorage.getItem("parkingPage")

    const initialResults = []
    const initialPage = lsPage ? +lsPage : 1
    
    const [results, setResults] = useState(initialResults)
    const [page, setPage] = useState(initialPage)

    return (
        <div>
            <div className="divTitleMain">
                <span className="titleMain">Parking slot searcher</span>                
            </div>
            <SearchBar results={results} setResults={setResults} page={page} setPage={setPage}/>
            <List results={results} page={page} />
            <Pagination results={results} page={page} setPage={setPage}/>
        </div>
    )
}

export default Main
