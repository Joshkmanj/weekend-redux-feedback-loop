import { useState } from "react";
import { useHistory } from 'react-router-dom';
// import { useDispatch } from 'react-redux'


function Morale({submitHandler}) {

    const [morale, setMorale] = useState('')
    const history = useHistory();
    const dispatchType = 'SET_MORALE';
    const nextDestination = '/understanding'

    function clickSubmit() {
        submitHandler(morale,dispatchType) ? history.push(nextDestination) : console.log('Error submitting');
    }
    

    return (
        <div className="body">
            <div className="card">
                <h3>How are you feeling today?</h3>
                    <span>Bad 
                        <input
                            className="rating"
                            required
                            value={morale}
                            onChange={(event) => { setMorale(event.target.value) }}
                            type="range"
                            min={0} max={5} />
                         Great</span>
                    <button 
                    className="next"
                    onClick={clickSubmit}>Next</button>
            </div>
        </div>
    )
}
export default Morale;
