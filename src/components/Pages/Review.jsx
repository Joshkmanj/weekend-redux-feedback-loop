import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Review(){

    const formData = useSelector(store => store.currentRatings)
    const history = useHistory();
    const nextDestination = '/confirmation';



    const postData = () => {

        axios.post('/survey', formData )
        .then(response => {
            console.log('POST req success!', response)
            history.push(nextDestination)
        })
        .catch(error => {
            console.error('POST req failed!', error)
        })
    }

    return(
        <>
        <div className="body">
            <div className="card">
                <h3>Please review before submitting!</h3>
                <h4 className="faded-text">Does everything look accurate?</h4>


                <p>My morale today: <span className='answer'>{formData.feeling} / 5</span></p>
                
                <p>My understanding of the material: <span className='answer'>{formData.understanding} / 5</span></p>
                
                <p>The level of support I'm feeling: <span className='answer'>{formData.support} / 5</span></p>
                
                { formData.comments ? <p>{formData.comments}</p> : <p className="faded-text">No comments given</p> }
                

                <button
                    className="next"
                    onClick={postData}
                    >Submit</button>

            </div>
        </div>
        </>
    )
}
export default Review;