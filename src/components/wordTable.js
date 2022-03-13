import React, {useState,useEffect} from "react";
import Word from "./Word";


const WordTable = (props) =>{

    //dagens ord
    const dailyWord = props.dailyWord;

    const[rowWords, setRowWords] = useState([
        {rowWord:"", rowNr:1},
        {rowWord:"",rowNr:2},
        {rowWord:"",rowNr:3},
        {rowWord:"",rowNr:4},
        {rowWord:"",rowNr:5},
        {rowWord:"",rowNr:6}
    ])

    useEffect( () =>{
        console.log(rowWords);
      }, [rowWords]);
    
    return(
        <div className='container'>
            <Word setRowWords={setRowWords} rowWords={rowWords} id={1}/>
            <Word setRowWords={setRowWords} id={2} disabled={true}/>
            <Word setRowWords={setRowWords} id={3} disabled={true}/>
            <Word setRowWords={setRowWords} id={4} disabled={true}/>
            <Word setRowWords={setRowWords} id={5} disabled={true}/>
            <Word setRowWords={setRowWords} id={6} disabled={true}/>   
        </div>
    )
}
export default WordTable;