import './Header.scss';
import {useSelector} from "react-redux"

function Header() {
    const score = useSelector(state=>state.app.score)
    
  return (
      <div className = "header">
          <div className='logo'>
        BirdSongs
    </div>
    <div className='score'>
        {score} Балаў
    </div>
      </div>
    
  );
}

export default Header;
