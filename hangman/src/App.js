import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Gallow from './components/Gallow';
import Word from './components/Word';
import WrongLetters from './components/WrongLetters';
import './App.css';

const words = ['wrong', 'right', 'nope', 'yep'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {

  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  useEffect(() =>{
    const handleKeyDown = event => {
      const { key, keyCode} = event;
      if (playable && keyCode >= 65 && keyCode <= 90){
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if(!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [ ... currentLetters, letter]);
          } else {
            //Do something
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(wrongLetters => [ ... wrongLetters, letter]);
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);

  }, [correctLetters, wrongLetters, playable]);

  return (
    <div className="App">
      <Header />
      <Gallow />
      <WrongLetters wrongLetters={wrongLetters} />
      <Word selectedWord={selectedWord} correctLetters={correctLetters} />
    </div>
  );
}

export default App;
