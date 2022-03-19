import React, {useEffect} from "react";
import Letter from "./letter";

const KeyBoard = (props) =>{

    const alphabet = ["Q","W","E","R","T","Y","u","I","O","P","A","S","D","F","G","H","J","K","L","z","X","C","V","B","N","M"];
    const usedLetters = props.usedLetters;
    const letterInWord = props.letterInWord;
    const letterCorrect = props.letterCorrect;
    const tries = props.tries;

    const decideColor = (letter) =>{

        let color = "letter"

        if(usedLetters.includes(letter)&&(!(letterCorrect.includes(letter)&&letterInWord.includes(letter)))){
            color="letter_used"
        }
        if(letterInWord.includes(letter)){
            color="letter_in_word"
        }
        if(letterCorrect.includes(letter)){
            color ="letter_correct"
        }
        
        return color;
    }

    useEffect( ()=>{

    }, [tries])


    //check if word is correct and color correctly
    //find out if I register what letters who is right somewhere

    return(
        <div className="keyboard">
            {alphabet.map( (letter, key) =>{
                return <Letter a = {letter} key={key} class={decideColor(letter)}/>
        })}
        </div>
    )
}

export default KeyBoard;