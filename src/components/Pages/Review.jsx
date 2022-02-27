// import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Review(){

    const formData = useSelector(store => store.currentRatings)



    const clickSubmit = ()=>{
        console.log('Clicked submit');
        
    }

    const postData = () => {

        axios.post()
    }

    return(
        <>
        <div className="body">
            <div className="card">
                <h3>Please review before submitting!</h3>
                <h4 className="faded-text">Does everything look accurate?</h4>


                <p>My morale today: <span className='answer'>{formData.morale} / 5</span></p>
                
                <p>My understanding of the material: <span className='answer'>{formData.understanding} / 5</span></p>
                
                <p>The level of support I'm feeling: <span className='answer'>{formData.support} / 5</span></p>
                
                { formData.comment ? <p>{formData.comment}</p> : <p className="faded-text">No comment given</p> }
                

                <button
                    className="next"
                    onClick={clickSubmit}
                    >Submit</button>

            </div>
        </div>
        </>
    )
}
export default Review;