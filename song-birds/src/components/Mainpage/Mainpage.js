import './Main.scss';
import List from './components/List/List';
import Button from './components/Button/Button';
import About from './components/About/About';

function Mainpage({
  birdNumber, setbirdNumber, mathRandom
}) {


    return (
        <div className="Mainpage">
          <div className="MainPageContainer">
          <About birdNumber ={birdNumber}/>
          <List birdNumber ={birdNumber}/>
          </div>
          <Button setbirdNumber={setbirdNumber} mathRandom={mathRandom}/>
        </div>
    );
}

export default Mainpage;