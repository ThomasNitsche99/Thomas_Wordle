import React from "react";

const WonMessage = (props) =>{


    return(
        <div className="wonMessage">
            <h1>You Won!</h1>
            <h2>You used {props.tries} tries!</h2>
        </div>
    )
}

export default WonMessage;