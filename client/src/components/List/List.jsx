import "./List.css"

function List(props) {

    function goToDetails(url) {
        window.location.assign(url)
    }

    return (
        <div>
            {props.results.find(r => r.page === props.page) &&
                <div className="divCardDetailsList">
                    <span className="cardDetailsList">Click the card to get more details</span> 
                    <span className="cardDetailsList">Total results: {props.results.find(r=>r.total)?.total}</span>
                </div>                
            }
            {props.results.find(r => r.page === props.page)?.data.map((result, index) =>
                <div key={index} className="divParkList" onClick={() => goToDetails(result.url)}>
                    <div className="divParkDataList">
                        <span><span className="addressSpan">Address: </span>{result.location.address1}</span>
                        <span><span className="addressSpan">Rating: </span>{result.rating} ({result.review_count} reviews) </span>
                        <span><span className="addressSpan">Score: </span>{((result.review_count * result.rating) / (result.review_count + 1)).toFixed(1)}</span>
                    </div>
                    {result.image_url &&
                        <div className="parkDivImgList">
                            <img className="parkImgList" src={result.image_url} alt="" />
                        </div>}
                </div>)}
        </div>
    )
}

export default List
