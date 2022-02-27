import { useState } from "react";
import { useHistory } from 'react-router-dom';
// import { useDispatch } from 'react-redux'


function Feeling({submitHandler}) {

    const [feelsRating, setFeelsRating] = useState('')
    const history = useHistory();
    

    const dispatchType = 'SET_FEELS';
    const nextDestination = 'Understanding'

    function clickSubmit() {
        submitHandler(feelsRating,dispatchType) ? history.push('/Understanding') : console.log('Error submitting');
    }
    

    return (
        <div className="body">
            <div className="card">
                <h3>How are you feeling today?</h3>
                    <span>Bad
                        <input
                            className="rating"
                            required
                            value={feelsRating}
                            onChange={(event) => { setFeelsRating(event.target.value) }}
                            type="range"
                            min={1} max={5} />
                        Great</span>
                    <button onClick={clickSubmit}>Next</button>
            </div>
        </div>
    )
}
export default Feeling;
