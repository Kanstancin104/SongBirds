import { useSelector, useDispatch } from "react-redux"
import { SET_GAME, SET_SCORE } from "../../../../actions/actions-types"
import birdsData from "../../../../data/birds"
import { setApplicationState } from '../../../../actions/actions-creator'
import { setApplicationScore } from '../../../../actions/actions-creator'

function List({
    birdNumber

}) {
    const level = useSelector(state => state.app.level)
    let score = useSelector(state => state.app.score)
    const game = useSelector(state => state.app.game)
    const dispatch = useDispatch()
    const checkBird = (index) => {
        if (birdNumber === index) {
            if (!game) {
                dispatch(
                    setApplicationScore(SET_SCORE, score += 5)
                )
            }
            dispatch(
                setApplicationState(SET_GAME, true)
            )

        }
        else {
            if (!game&&score>0) {
                dispatch(
                    setApplicationScore(SET_SCORE, score +=-1)
                )
            }
        }
    }





    return (
        <div className="list">
            {birdsData[level].map((item, index) => {
                return <div onClick={() => checkBird(index)} className="birdlist">{item.name}</div>
            })}
        </div>
    );

}
export default List;