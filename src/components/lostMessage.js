import React from "react";

const LostMessage = (props) =>{


    return(
        <div className="wonMessage">
            <h1>You lost!</h1>
            <h2>The word was {props.dailyWord}</h2>
        </div>
    )
}

export default LostMessage;