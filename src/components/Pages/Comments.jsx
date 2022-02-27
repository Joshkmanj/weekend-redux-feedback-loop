import { useState } from "react";
import { useHistory } from 'react-router-dom';

function Comment({submitHandler}) {

    const [comment, setComment] = useState('')
    const history = useHistory();
    const dispatchType = 'SET_COMMENT';
    const nextDestination = '/Review';
    let payload = comment;

    function clickSubmit() {
        submitHandler(payload, dispatchType) & history.push(nextDestination) ;
    }


    return (
        <div className="body">
            <div className="card">
                <h3>Do you have any comments you'd like to add?</h3>
                <textarea
                    rows={4}
                    cols={60}
                    value={comment}
                    placeholder="What's on your mind?"
                    onChange={(event) => { setComment(event.target.value) }} />
                <button
                    className="next"
                    onClick={clickSubmit}>Next</button>
            </div>
        </div>
    )
}
export default Comment;