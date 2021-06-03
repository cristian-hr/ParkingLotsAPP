import "./Pagination.css"

function Pagination (props) {

    const page = localStorage.getItem("parkingPage") ? localStorage.getItem("parkingPage") : props.page

    function nextPage () {
        props.setPage(props.page+1)
        localStorage.setItem("parkingPage", `${props.page+1}` )
    }

    function prevPage () {
        props.setPage(props.page-1)
        localStorage.setItem("parkingPage", `${props.page-1}` )
    }

    return (
        <div className="divPag">
            {page > 1 && <button onClick={prevPage}>Previus Page</button>}
            {props.results[0] && <button onClick={nextPage}>Next Page</button>}
        </div>
    )
}

export default Pagination;
