import './App.css';
import Header from '../Header/Header';
import Sections from '../Sections/Sections';
import Player from '../Player/Player';
import Mainpage from '../Mainpage/Mainpage';
import React, { useState } from 'react';
import EndGame from '../EndGame/EndGame';
import { useSelector } from "react-redux"

function App() {
  const mathRandom = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  let level = useSelector(state => state.app.level)
  const [birdNumber, setbirdNumber] = useState(mathRandom(5));
 
  return (
    <div className="section-app">
      {level <= 5 ? <div className='sectionappcontainer'>
        <Header />
        <Sections />
        <Player birdNumber={birdNumber} />
        <Mainpage birdNumber={birdNumber} setbirdNumber={setbirdNumber} />
      </div>
        : <EndGame />}
    </div>
  );
}

export default App;
