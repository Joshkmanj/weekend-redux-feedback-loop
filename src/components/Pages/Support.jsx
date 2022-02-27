import { useState } from "react";
import { useHistory } from 'react-router-dom';

function Support({submitHandler}){

    const [support, setSupport] = useState('')
    const history = useHistory();
    const dispatchType = 'SET_SUPPORT';
    const nextDestination = '/Comments';
    let payload = support;

    function clickSubmit() {
        submitHandler(payload,dispatchType) ? history.push(nextDestination) : console.log('Error submitting');
    }


    return (
        <div className="body">
            <div className="card">
                <h3>How much do you feel like you understand the material today?</h3>
                    <span>Bad 
                        <input
                            className="rating"
                            required
                            value={support}
                            onChange={(event) => { setSupport(event.target.value) }}
                            type="range"
                            min={1} max={5} />
                         Great</span>
                    <button 
                    className="next"
                    onClick={clickSubmit}>Next</button>
            </div>
        </div>
    )
}
export default Support;
