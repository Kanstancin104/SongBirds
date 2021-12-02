import './Sections.scss';
import {useSelector, useDispatch} from "react-redux"
import { setApplicationState } from '../../actions/actions-creator';
import { SET_SCORE } from '../../actions/actions-types';
import section from '../../data/section';

function Sections() {
    const score = useSelector(state=>state.app.score) 
    const dispatch = useDispatch()
    const level = useSelector(state=>state.app.level)
   
  return (
      <div className = "sections">
         {section.map((item, key)=><div className={level===key?"red-section":"black-section"} key = {key}>{item}</div>)}
      </div>
    
  );
}

export default Sections;