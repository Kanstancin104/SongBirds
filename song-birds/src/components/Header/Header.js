import './Header.scss';
import {useSelector, useDispatch} from "react-redux"
import { setApplicationState } from '../../actions/actions-creator';
import { SET_SCORE } from '../../actions/actions-types';

function Header() {
    const score = useSelector(state=>state.app.score) 
    const dispatch = useDispatch()
    const changeScore = ()=>{
      dispatch(
        setApplicationState(SET_SCORE, score + 5)
      )
    }
  return (
      <div className = "header">
          <div onClick={() => changeScore()}>
        BirdSongs
    </div>
    <div>
        {score} Score
    </div>
      </div>
    
  );
}

export default Header;
