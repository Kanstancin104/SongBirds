import React, {useRef} from 'react';
import './Player.scss';
import { useSelector, useDispatch } from "react-redux"
import { setApplicationState } from '../../actions/actions-creator';
import { SET_SCORE } from '../../actions/actions-types';
import section from '../../data/section';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import birdimg from '../../assets/images/birdimg.png'
import birdsData from "../../data/birds"

function Player({ birdNumber }) {

    const level = useSelector(state => state.app.level)
    const game = useSelector(state => state.app.game)
    const player = useRef()
    const stopAudioFunction=()=>{
        if (!game){
            // player.current.audio.current.pause();
        }
      
    }  
    return (

        <div className="mainblock">
            {stopAudioFunction()}
            <div>
                <img class="bird-picture"
                    src={game ? birdsData[level][birdNumber].image : birdimg}
                    alt="Main bird picture"></img>
            </div>
            <div>
                <div>
                    <p>{game ? "Bird" : "*****"}</p>
                </div>
                <div>

                    <AudioPlayer className="player"
                        autoPlay
                        src={level<=5?birdsData[level][birdNumber].audio:null}
                        ref={player}
                        onPause={() => stopAudioFunction()}


                    />
                </div>
            </div>
        </div>
    );
}

export default Player;