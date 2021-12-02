import './Main.scss';
import { useSelector, useDispatch } from "react-redux"
import List from './components/List/List';
import Button from './components/Button/Button';
import About from './components/About/About';

function Mainpage({
  birdNumber
}) {
    const level = useSelector(state => state.app.level)

    return (
        <div className="Mainpage">
          <div className="MainPageContainer">
          <About/>
          <List birdNumber ={birdNumber}/>
          </div>
          <Button/>
        </div>
    );
}

export default Mainpage;