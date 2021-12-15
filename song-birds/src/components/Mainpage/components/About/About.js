import { useSelector } from "react-redux"
import birdsData from "../../../../data/birds";
import './About.scss';


function About({
    birdNumber
})

 {
    const game = useSelector(state => state.app.game)
    const level = useSelector(state=>state.app.level)

    return (
        <div className="about">
            {game ?
             <div>
                <div><img
               src={birdsData[level][birdNumber].image} alt="levelimg">
                </img>
                <p>{birdsData[level][birdNumber].name}</p>
                <p>{birdsData[level][birdNumber].species}</p>
                <p>{birdsData[level][birdNumber].description}</p>
                    </div>
                    </div> : <div className="description">Апісаньне</div>}
            
        </div>
    );
}

export default About;