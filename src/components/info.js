import React, {useState,useEffect} from "react";

const Info = (props) =>{

    const[date, setDate] = useState(null);
    

    // const getDate = () =>{

    //     const requestOptions = {
    //         method: "GET",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       };

    //     fetch("http://worldtimeapi.org/api/timezone/Europe/Oslo", requestOptions)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //     });
    // }

    // useEffect( ()=>{
    //     getDate()
    // }, [])
    
    
    return(
        <div className='Info'>
              <h1>Welome to worlde</h1>
              <p>Created by Thomas </p>
        </div>
    )
}

export default Info;