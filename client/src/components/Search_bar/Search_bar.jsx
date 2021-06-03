import { useState, useEffect } from "react"
import axios from "axios"
import "./Search_bar.css"

function SearchBar(props) {

    const { REACT_APP_API_URL } = process.env
    const lsSeach = localStorage.getItem("parkingSearch")

    const [search, setSearch] = useState("")

    useEffect(() => {
        if (lsSeach && !props.results.find(r => r.page === props.page)) {
            setSearch(lsSeach)
            apiNextSearch()
        }
    // eslint-disable-next-line
    }, [props.page])

    function apiNextSearch() {
        axios.get(`${REACT_APP_API_URL}/${lsSeach}/${props.page}`)
            .then(res => {

                if (props.results.find(r => r.total)) {
                    props.setResults([...props.results,
                    { page: props.page, search: lsSeach, data: res.data.businesses }
                    ])
                }
                else {
                    props.setResults([...props.results,
                    { total: res.data.total },
                    { page: props.page, search: lsSeach, data: res.data.businesses }
                    ])
                }
            })
            .catch(err => console.log(err))
    }

    function handleInputChange(event) {
        event.preventDefault()
        setSearch(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        localStorage.setItem("parkingSearch", search)
        localStorage.setItem("parkingPage", "1")
        props.setPage(1)
        props.setResults([])

        if (search) {
            axios.get(`${REACT_APP_API_URL}/${search}/${1}`)
                .then(res => {
                    props.setResults([{ total: res.data.total }, { page: 1, search: search, data: res.data.businesses }])
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className="contDivSB">
            <form action="" onSubmit={handleSubmit}>
                <input className="inputSB" type="text" value={search} onChange={handleInputChange} />
                <input className="submitSB" value="Search" type="submit" onSubmit={handleSubmit} />
            </form>
        </div>
    )
}

export default SearchBar
