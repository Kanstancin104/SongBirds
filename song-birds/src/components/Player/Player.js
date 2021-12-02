import './Player.scss';
import { useSelector, useDispatch } from "react-redux"
import { setApplicationState } from '../../actions/actions-creator';
import { SET_SCORE } from '../../actions/actions-types';
import section from '../../data/section';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import birdimg from '../../assets/images/birdimg.png'
import birdsData from "../../data/birds"

function Player(props) {
    const level = useSelector(state => state.app.level)
    const game = useSelector(state=>state.app.game)
    // console.log(birdsData[level][birdNumber].image)
    console.log(birdsData)
    console.log(props)
    console.log(level)
    return (
        <div className="mainblock">
            <div>
                <img class="bird-picture"
                    src={game?birdsData[level][2].image:birdimg}
                    alt="Main bird picture"></img>
            </div>
            <div>
                <div>
                    <p>{game?"Bird":"*****"}</p>
                </div>
            <div>
                
                <AudioPlayer className="player"
                    autoPlay
                    src={birdsData[level][2].audio}
                    
                />
            </div>
            </div>
        </div>
    );
}

export default Player;