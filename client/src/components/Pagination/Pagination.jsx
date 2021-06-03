import "./Pagination.css"

function Pagination(props) {

    const page = localStorage.getItem("parkingPage") ? localStorage.getItem("parkingPage") : props.page

    function nextPage() {
        props.setPage(props.page + 1)
        localStorage.setItem("parkingPage", `${props.page + 1}`)
        window.scrollTo({ top: "300px", behavior: "smooth" })
    }

    function prevPage() {
        props.setPage(props.page - 1)
        localStorage.setItem("parkingPage", `${props.page - 1}`)
        window.scrollTo({ top: "300px", behavior: "smooth" })
    }

    function firstPage() {
        props.setPage(1)
        localStorage.setItem("parkingPage", `1`)
        window.scrollTo({ top: "300px", behavior: "smooth" })
    }

    return (
        <div className="divPag">
            {props.results.find(r => r.page === props.page) &&
                <div>
                    {page > 1 && <button className="pageButton" onClick={firstPage}>First Page</button>}
                    {page > 1 && <button className="pageButton" onClick={prevPage}>Previous Page</button>}
                    {props.results[0]?.data[0] && <button className="pageButton" onClick={nextPage}>Next Page</button>}
                </div>
            }
        </div>
    )
}

export default Pagination;
