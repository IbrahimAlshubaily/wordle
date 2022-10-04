
import { useEffect, useState } from 'react';
import './css/App.css';
import Grid from "./Grid"

const API_URL = "https://api.frontendexpert.io/api/fe/wordle-words";

export default function App() : JSX.Element {
  const [word, setWord] = useState('');
  useEffect(() => {
  
    fetch(API_URL).
    then((res) => res.json()).
    then(words => setWord(words[Math.floor(Math.random() * words.length)]));
  
  }, []);
  console.log(word);
  return  <div className="App" key={word}>
            <Grid solution={word}/>
          </div>

  
}