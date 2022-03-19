import userEvent from "@testing-library/user-event";
import React, {useEffect, useState,useRef} from "react";


const Word = (props) =>{

    const disabled = props.disabled;
    const [rowWord, setRowWord] = useState({id:props.id, word: {A:"", B:"", C:"", D:"", E:""}});
    const colors = props.colors;
    const startInput = useRef(null)

    //handles change in the input field
    const handleChange = (e) =>{
        //check if number is input
        if (e.target.value == null || e.target.value == '')
        {
            if(props.id === rowWord["id"]){
                for(var key in rowWord["word"]){
                    if(key===e.target.name){
                        rowWord["word"][key] = e.target.value;
                    }
                }
            }
        }

        let regex=/^[a-zA-Z]+$/;
        if(!e.target.value.match(regex)){
            e.target.value = "";
            return;
        }

        //if letter is not uppercase
        if(e.target.value !== e.target.value.toUpperCase()){
            e.target.value = e.target.value.toUpperCase();
        }

        const obj = e.target;
        const {name, value} = obj

        if(props.id === rowWord["id"]){
            for(var key in rowWord["word"]){
                if(key===name){
                    rowWord["word"][key] = value;
                }
            }
        }
        setRowWord(rowWord);
        props.gameStart(true)

        if(e.target.nextSibling){
            e.target.nextSibling.focus();
        }

    }

    const backSpace = (e) =>{
        if(e.keyCode===8){
            console.log(e.target);
            if(e.target.value.name==="E"){
                e.target.value="";
                return
            }
            if(e.target.previousSibling && (!(e.target.value.name=="E"))){
                e.target.previousSibling.focus();
                e.target.value="";
            }
            else{
                e.target.value="";
            }
        }

    }

    useEffect( () =>{
        startInput.current.focus()
    },[props.active])

    //handle submitting of the entire row
    const handleSubmit = (e) =>{
        e.preventDefault();
        let word = "";
        for(var letter in rowWord["word"]){
            word += rowWord["word"][letter]
        }

        if(word.length< 5){
            return

        }else{
            props.setRowWords(props.rowWords.map(row => {
                if(row.rowNr === rowWord.id){
                    return {...row, rowWord: word}
                }
                return row;
            }))
        }
    }

    return(
            <div className="">
                <form onSubmit={handleSubmit} className="row">
                    <input onChange={handleChange} type="text" className={colors[0]} maxLength="1" name="A" disabled={disabled? true: false} ref={startInput}></input>
                    <input onChange={handleChange} type="text" className={colors[1]} maxLength="1" name="B" disabled={disabled? true: false} onKeyDown={backSpace}></input>
                    <input onChange={handleChange} type="text" className={colors[2]} maxLength="1" name="C" disabled={disabled? true: false} onKeyDown={backSpace}></input>
                    <input onChange={handleChange} type="text" className={colors[3]} maxLength="1" name="D" disabled={disabled? true: false} onKeyDown={backSpace}></input>
                    <input onChange={handleChange} type="text" className={colors[4]} maxLength="1" name="E" disabled={disabled? true: false} onKeyDown={backSpace}></input>
                    <button className="btn" type="submit" disabled={disabled? true: false}>Guess</button>
                </form>
            </div>
    )
}
export default Word;