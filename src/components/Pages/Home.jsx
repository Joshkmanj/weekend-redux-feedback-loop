// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Home() {

    const history = useHistory();

    const clickSubmit = ()=>{
        history.push('/Feeling');
    }

    return (
        <div className="body">
            <div className="card">
                <h2>Please fill out this survey!</h2>
                <button
                    className="next"
                    onClick={clickSubmit}>Proceed</button>
            </div>
        </div>
    )
}
export default Home;