import { useSelector } from "react-redux"
import birdsData from "../../../../data/birds";
import './About.scss';


function About({
    birdNumber
}) {
    const game = useSelector(state => state.app.game)
    const level = useSelector(state => state.app.level)

    return (
        <div className="about">
            {game ?
                <div className="aboutdiv">
                    <div>
                        <div className="commondiv">
                            <img className="aboudpic"
                                src={birdsData[level][birdNumber].image} alt="levelimg" />
                            <div className="nazva">
                                <p>{birdsData[level][birdNumber].name}</p>
                                <p>{birdsData[level][birdNumber].species}</p>
                            </div>
                        </div>
                        <p>{birdsData[level][birdNumber].description}</p>
                    </div>
                </div> : <div className="description">Апісаньне</div>}

        </div>
    );
}

export default About;