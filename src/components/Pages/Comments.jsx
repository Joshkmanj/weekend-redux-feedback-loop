import { useState } from "react";
import { useHistory } from 'react-router-dom';

function Comment({submitHandler}) {

    const [comment, setComment] = useState('')
    const history = useHistory();
    const dispatchType = 'SET_COMMENT';
    const nextDestination = '/review';
    let payload = comment;

    function clickSubmit() {
        submitHandler(payload, dispatchType) & history.push(nextDestination) ;
    }

    // This function here will alert the user before they reload the webpage and lose unsaved changes.
    // window.onbeforeunload = function() {
    //     return "Reloading may erase any unsaved changes!";
    // }

    return (
        <div className="body">
            <div className="card">
                <h3>Are there any comments you'd like to add? <span className="faded-text">(Optional)</span></h3>
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