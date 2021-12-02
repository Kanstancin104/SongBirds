import './App.css';
import Header from '../Header/Header';
import Sections from '../Sections/Sections';
import Player from '../Player/Player';
import Mainpage from '../Mainpage/Mainpage';
import React, { useState } from 'react';

function App() {
  const mathRandom = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  const [birdNumber, setbirdNumber] = useState(mathRandom(5));
  console.log(birdNumber)
  return (
    <div className="section-app">
      <Header/>
      <Sections/>
      <Player birdNumber ={setbirdNumber}/>
      <Mainpage birdNumber ={birdNumber}/>
    </div>
  );
}

export default App;
