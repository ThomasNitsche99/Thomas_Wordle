import React, {useState,useEffect} from "react";

const Letter = (props) =>{
    const id = props.a;
    const color = props.class;


    useEffect( ()=>{
        console.log(color)
    },[])
    
    return(
        <div className={props.class}>
            <h1>{props.a}</h1>
        </div>
    )
}

export default Letter;