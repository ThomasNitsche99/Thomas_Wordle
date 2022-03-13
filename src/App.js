import React, {useState} from 'react';
import './App.css';
import WordTable from './components/wordTable';

function App() {

  const [dailyWord, setDailyWord] = useState("FISHY");


  return (
    <div className='App'>
      
      <div className='header'>
        <h1>Wordle</h1>
        <p>By thomas og johan</p>
      </div>

      <WordTable dailyWord={dailyWord}/>
    </div>
  );
}

export default App;
