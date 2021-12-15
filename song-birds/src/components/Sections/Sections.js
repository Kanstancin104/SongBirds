import './Sections.scss';
import {useSelector} from "react-redux"
import section from '../../data/section';

function Sections() {
    const level = useSelector(state=>state.app.level)
   
  return (
      <div className = "sections">
         {section.map((item, key)=><div className={level===key?"red-section":"black-section"} key = {key}>{item}</div>)}
      </div>
    
  );
}

export default Sections;