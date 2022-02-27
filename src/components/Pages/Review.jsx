// import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Review(){

    const formData = useSelector(store => store.currentRatings)



    return(
        <>
        <div className="body">
            <div className="card">
                <h3>Review before submitting!</h3>
                <h4 className="faded-text">Does everything look accurate?</h4>
                <h4>{formData.feelsRating}</h4>
                <h4>{formData.understanding}</h4>
                <h4>{formData.support}</h4>
                <h4>{formData.comment}</h4>
                <button
                    className="next"
                    // onClick={clickSubmit}
                    >Next</button>
            </div>
        </div>
        </>
    )
}
export default Review;