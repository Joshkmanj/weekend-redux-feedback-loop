// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

function Confirmation() {


    const clicker = (location) => {
        history.pushState(location)
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