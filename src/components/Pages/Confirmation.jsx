// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Confirmation() {

    const history = useHistory();


    const clicker = (location) => {
        history.push(location)
    }

    return (
        <div className="body">
            <div className="card">
                <h2>Thank you for your time!</h2>
                <button
                    className="home-button"
                    onClick={()=>(clicker('/'))}>Return Home</button>
                <button
                    className="restart-button"
                    onClick={()=>(clicker('/morale'))}>Complete another survey</button>
            </div>
        </div>
    )
}
export default Confirmation;