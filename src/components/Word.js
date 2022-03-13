import React, {useState} from "react";


const Word = (props) =>{

    const disabled = props.disabled;
    const [guessed, setGuessed] = useState("");
    
    const [rowWord, setRowWord] = useState({id:props.id, word: {A:"", B:"", C:"", D:"", E:""}});

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
        console.log(rowWord);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("clicked");
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

    //todo, handle guess word
    //check if word is correct, color the words at right position or wrong position


    return(
            <div className="">
                <form onSubmit={handleSubmit} className="row">
                    <input onChange={handleChange} type="text" className='input' maxLength="1" name="A" disabled={disabled? true: false} ></input>
                    <input onChange={handleChange} type="text" className='input' maxLength="1" name="B" disabled={disabled? true: false}></input>
                    <input onChange={handleChange} type="text" className='input' maxLength="1" name="C" disabled={disabled? true: false}></input>
                    <input onChange={handleChange} type="text" className='input' maxLength="1" name="D" disabled={disabled? true: false}></input>
                    <input onChange={handleChange} type="text" className='input' maxLength="1" name="E" disabled={disabled? true: false}></input>
                    <button className="btn" type="submit" disabled={disabled? true: false}>Guess</button>
                </form>
            </div>
    )
}
export default Word;