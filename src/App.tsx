
import React, { useEffect, useState } from 'react';
import './css/App.css';
import Grid from "./Grid"

const API_URL = "https://api.frontendexpert.io/api/fe/wordle-words";

export default function App() : JSX.Element {
  
  const [solution, setSolution] = useState('');
  
  useEffect(() => {
    const getWord = async() => {
      const reponse =  await fetch(API_URL);
      const words = await reponse.json();
      const wordIdx = Math.floor(Math.random() * words.length);
      setSolution(words[wordIdx]);
    }
    getWord();
  }, []);
  console.log(solution);
  return React.createElement('div',  {className : "App", key: solution}, 
          React.createElement(Grid, { solution: solution }));
  
}