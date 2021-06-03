import { useState, useEffect } from "react"
import axios from "axios"
import "./Search_bar.css"

function SearchBar(props) {

    const { REACT_APP_API_URL } = process.env
    const results = props.results

    const [search, setSearch] = useState("")

    const lsSeach = localStorage.getItem("parkingSearch")
    const lsPage = localStorage.getItem("parkingPage")

    useEffect(()=>{
        if(props.page > 1 && !results.find(r=>r.page==props.page)) {
            function pageResult() {
                axios.get(`${REACT_APP_API_URL}/${search}/${props.page}`)
                    .then(res => {
                        props.setResults([...results, { page: props.page , data: res.data.businesses }])
                    })
                    .catch(err => console.log(err))
            }
            pageResult()
        }
        else if(lsSeach && !results.find(r=>r.page===props.page)) {
            setSearch(lsSeach)
            function lsResult() {
                axios.get(`${REACT_APP_API_URL}/${lsSeach}/${lsPage > 1 ? lsPage : props.page}`)
                    .then(res => {
                        props.setResults([...results, { page: lsPage > 1 ? +lsPage : props.page , data: res.data.businesses }])
                    })
                    .catch(err => console.log(err))
            }
            lsResult()
        }
    },[props.page, lsSeach])

    function handleInputChange(event) {
        event.preventDefault()
        setSearch(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        localStorage.setItem("parkingSearch", search)
        localStorage.setItem("parkingPage", "1")
        axios.get(`${REACT_APP_API_URL}/${search}/${props.page}`)
            .then(res => {
                console.log(res.data.businesses)
                props.setResults([{ page: props.page , data: res.data.businesses }])
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="contDivSB">
            <form action="" onSubmit={handleSubmit}>
                <input className="inputSB" type="text" value={search} onChange={handleInputChange} />
                <input className="submitSB" value="Submit" type="submit" onSubmit={handleSubmit} />
            </form>
        </div>
    )
}

export default SearchBar
