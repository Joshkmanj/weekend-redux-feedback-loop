import { useState } from "react";
import { useHistory } from 'react-router-dom';

function Understanding({submitHandler}){

    const [understanding, setUnderstanding] = useState('')
    const history = useHistory();
    const dispatchType = 'SET_UNDERSTANDING';
    const nextDestination = '/support';
    let payload = understanding;

    function clickSubmit() {
        submitHandler(payload,dispatchType) ? history.push(nextDestination) : console.log('Error submitting');
    }


    return (
        <div className="body">
            <div className="card">
                <h3>How much do you feel like you understand the material today?</h3>
                    <span>Very poorly 
                        <input
                            className="rating"
                            required
                            value={understanding}
                            onChange={(event) => { setUnderstanding(event.target.value) }}
                            type="range"
                            min={0} max={5} />
                         Very extensively</span>
                    <button 
                    className="next"
                    onClick={clickSubmit}>Next</button>
            </div>
        </div>
    )
}
export default Understanding;