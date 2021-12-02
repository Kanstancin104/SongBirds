import { useSelector, useDispatch } from "react-redux"
import birdsData from "../../../../data/birds";
import './About.scss';


function About() {
    const game = useSelector(state => state.app.game)
    const level = useSelector(state=>state.app.level)

    return (
        <div className="about">
            {game ?
             <div>
                <div><img
               src={birdsData[level][2].image}>
                </img>
                <p>{birdsData[level][2].name}</p>
                <p>{birdsData[level][2].species}</p>
                <p>{birdsData[level][2].description}</p>
                    </div>
                    </div> : <div>Апісаньне</div>}
            
        </div>
    );
}

export default About;