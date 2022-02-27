import { useState } from "react";

function Feeling() {

    const [feelRating, setFeelRating] = useState(1)

    const ratingHandler = (val) => {
        console.log(val);
        setFeelRating(val)
    }

    return (
        <div className="body">
            <div className="card">
                <h3>How are you feeling today?</h3>
                <span>Bad
                    <input 
                    className="rating" 
                    value={feelRating}
                    onChange={(event)=>{ratingHandler(event.target.value)}} 
                    type="range" 
                    min={1} max={5} />
                    Great</span>
            </div>
        </div>
    )
}
export default Feeling;
