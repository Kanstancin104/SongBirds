import './EndGame.scss';
import { useSelector, useDispatch } from "react-redux"
import { setApplicationState, setApplicationScore } from '../../actions/actions-creator';
import { SET_GAME, SET_LEVEL, SET_SCORE } from "../../actions/actions-types"
import { initialState } from "../../reducers/reducer"

function EndGame({

}) {
    const score = useSelector(state => state.app.score)
    const dispatch = useDispatch()
    let level = useSelector(state => state.app.level)
    const game = useSelector(state => state.app.game)
    const resetGame = () => {
        dispatch(
            setApplicationScore(SET_LEVEL, initialState.level)
        )
        dispatch(
            setApplicationState(SET_GAME, initialState.game)
        )
        dispatch(
            setApplicationState(SET_SCORE, initialState.score)
        )
    }

    return (
        <div className='endgame'>
            <div className='win'>Віншуем!</div>
            <div className='score'>{score === 30 ? "Вы прайшлі віктарыну й набралі 30 points" : `Вы прайшлі віктарыну й набралі ${score} points`}</div>
            <div onClick={() => resetGame()} className="button"></div>
            <div className="button">Паспрабаваць яшчэ раз</div>
        </div>
    )
}
export default EndGame;