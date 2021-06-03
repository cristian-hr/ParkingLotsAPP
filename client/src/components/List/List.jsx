import { useEffect } from "react"
import "./List.css"

function List(props) {

    function goToDetails (url) {
        window.location.assign (url)
    }

    const noImage = "https://ia-latam.com/wp-content/uploads/2018/12/No-image-found-1.jpg"

    //score = ( number of reviews * rating ) / (number of reviews + 1)

    return (
        <div>
            {props.results.find(r=>r.page===props.page)?.data.map((result, index) =>
                <div key={index} className="divParkList" onClick={()=>goToDetails(result.url)}>                    
                    <div className="divParkDataList">
                        <span>Address: {result.location.address1}</span>
                        <span>Rating: {result.rating} ({result.review_count} reviews) </span>
                        <span>Score: {((result.review_count * result.rating) / (result.review_count + 1)).toFixed(1)}</span>
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
