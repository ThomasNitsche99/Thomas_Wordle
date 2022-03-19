import React, {useState,useEffect} from "react";
import Word from "./Word";
import WonMessage from "./wonMessage";


const WordTable = (props) =>{
    const dailyWord = props.dailyWord;
    const[active,setActive] = useState(1);
    const[gameStart, setGameStart] = useState(false);
    const[rowWords, setRowWords] = useState([
        {rowWord:"", rowNr:1},
        {rowWord:"",rowNr:2},
        {rowWord:"",rowNr:3},
        {rowWord:"",rowNr:4},
        {rowWord:"",rowNr:5},
        {rowWord:"",rowNr:6}
    ])
    const[colors,setColors] = useState(
        [
            {rowNr:1,colors:["input", "input","input","input","input"]},
            {rowNr:2,colors:["input", "input","input","input","input"]},
            {rowNr:3,colors:["input", "input","input","input","input"]},
            {rowNr:4,colors:["input", "input","input","input","input"]},
            {rowNr:5,colors:["input", "input","input","input","input"]},
            {rowNr:6,colors:["input", "input","input","input","input"]}
        ]
    )

    //check the guessed word
    const checkGuessedWord = () =>{
        rowWords.map(row =>{
            if(row.rowNr === active){
                checker(row.rowWord);
            }
        })
    }

    //letter coloring in the word table
    const checker = (guess) =>{
        let LIW = props.letterInWord;
        let LC = props.letterCorrect;
        let liste = colors[active-1]["colors"]

        if(active===1){
            liste = colors[0]["colors"]
        }
        const DW = dailyWord.split('');
        const GW = guess.split('');
        if(guess === dailyWord){
            props.setWon(true)
            liste.forEach((element, index) => {
                liste[index] = "input_correctLetterSpot"
              });

        } else{
            GW.map(letter =>{
                if(DW.includes(letter)){
                    const indexInDW = DW.indexOf(letter) //index of letter in Dailyword
                    const indexInGW = GW.indexOf(letter) //index of letter in guessedWord

                    if(indexInDW === indexInGW){
                        liste[indexInGW] = "input_correctLetterSpot"
                        LC.push(letter);
                        props.setLetterCorrect(LC)
                    }else{
                        liste[indexInGW] = "input_wrongLetterSpot"
                        LIW.push(letter);
                        props.setLetterInWord(LIW)
                    }
                }
            })
        }    
    }

    //deides which row to disable
    const disabling = (nr) =>{
        if(props.won){
            return true
        }else{
            if(active===nr){
                return false
            }
            else{
                return true
            }
        }
    }

    //registers used letters for the app
    const registerUsedLetters = () =>{
        const list = props.usedLetters
        rowWords.map( (row) =>{
            if(row.rowWord!==""){
                let letters = row.rowWord.split("");
                letters.map( (letter) =>{
                    if(!(props.usedLetters.includes(letter))){
                        console.log(letter)
                        list.push(letter)
                        console.log(list)
                        return props.setUsedLetters(list);
                    }
                })
            }
        })
    }

    useEffect( () =>{
        if(gameStart){
            checkGuessedWord();
            setActive(active+1)
            props.setTries(props.tries+1)
        }
        registerUsedLetters()

      }, [rowWords]);
    
    

    return(
        <div className='container'>
            <Word setRowWords={setRowWords} rowWords={rowWords} id={1} disabled={disabling(1)} setActive={setActive} active={active} colors={colors[0]["colors"]} gameStart={setGameStart} />
            <Word setRowWords={setRowWords} rowWords={rowWords} id={2} disabled={disabling(2)} setActive={setActive} active={active} colors={colors[1]["colors"]} gameStart={setGameStart} />
            <Word setRowWords={setRowWords} rowWords={rowWords} id={3} disabled={disabling(3)} setActive={setActive} active={active} colors={colors[2]["colors"]} gameStart={setGameStart} />
            <Word setRowWords={setRowWords} rowWords={rowWords} id={4} disabled={disabling(4)} setActive={setActive} active={active} colors={colors[3]["colors"]} gameStart={setGameStart} />
            <Word setRowWords={setRowWords} rowWords={rowWords} id={5} disabled={disabling(5)} setActive={setActive} active={active} colors={colors[4]["colors"]} gameStart={setGameStart} />
            <Word setRowWords={setRowWords} rowWords={rowWords} id={6} disabled={disabling(6)} setActive={setActive} active={active} colors={colors[5]["colors"]} gameStart={setGameStart} />
        </div>
    )
}
export default WordTable;