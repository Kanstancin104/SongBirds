import './Player.scss';
import { useSelector } from "react-redux"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import bird from '../../assets/images/bird.png'
import birdsData from "../../data/birds"

function Player({ birdNumber }) {

    const level = useSelector(state => state.app.level)
    const game = useSelector(state => state.app.game)
    
    return (

        <div className="mainblock">
        
            <div>
                <img class="bird-picture"
                    src={game ? birdsData[level][birdNumber].image : bird}
                    alt="Main bird"></img>
            </div>
            <div>
                <div className='bird-name'>
                    <p>{game ? birdsData[level][birdNumber].name : "*****"}</p>
                </div>
                <div>

                    <AudioPlayer className="player"
                        autoPlay
                        src={level<=5?birdsData[level][birdNumber].audio:null}
                    />
                </div>
            </div>
        </div>
    );
}

export default Player;