import React, {useState,useEffect} from 'react';
import './App.css';
import WordTable from './components/wordTable';
import WonMessage from './components/wonMessage';
import LostMessage from './components/lostMessage';
import KeyBoard from './components/keyboard';
import Info from './components/info';

function App() {

  const [dailyWord, setDailyWord] = useState("");
  const[won, setWon] = useState(false);
  const[tries, setTries] = useState(0);
  const[usedLetters, setUsedLetters] = useState([]);
  const[letterInWord, setLetterInWord] = useState([]);
  const[letterCorrect, setLetterCorrect] = useState([]);
  let randomWords = require('random-words');

  
  //sets the daily word
  const settingDaily = () =>{
    let random_words = randomWords({exactly:20, maxLength: 5});
    let possible = random_words.filter( (word) => word.length === 5);

    if(possible.length>0){
      var random = possible[Math.floor(Math.random()*possible.length)]
      setDailyWord(random.toUpperCase())  
    }else{
      setDailyWord("FISHY")
    }
  }

  useEffect( () =>{

  }, [tries])

  useEffect( ()=>{
    settingDaily();
  }, [])


  return (
        <div className='App'>
            <div className='header'>
              <h1>Wordle</h1>
            </div>

            <WordTable 
              dailyWord={dailyWord}
              won={won}
              setWon={setWon}
              tries={tries}
              setTries={setTries}
              setUsedLetters={setUsedLetters}
              usedLetters={usedLetters}

              letterInWord={letterInWord}
              setLetterInWord={setLetterInWord}

              letterCorrect={letterCorrect}
              setLetterCorrect={setLetterCorrect}


            />
            {won ? <WonMessage tries={tries}/> : ""}
            {tries===6 && !won && <LostMessage dailyWord={dailyWord} />}

            <KeyBoard 
              usedLetters={usedLetters}
              letterInWord={letterInWord}
              letterCorrect={letterCorrect}
              tries={tries}
            />

            <Info /> 
        </div>
  );
}

export default App;
