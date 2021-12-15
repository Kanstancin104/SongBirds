import './EndGame.scss';
import { useSelector, useDispatch } from "react-redux"
import { setApplicationState, setApplicationScore } from '../../actions/actions-creator';
import { SET_GAME, SET_LEVEL, SET_SCORE } from "../../actions/actions-types"
import { initialState } from "../../reducers/reducer"

function EndGame(
) {
    const score = useSelector(state => state.app.score)
    const dispatch = useDispatch()
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
            <div className='score'>{score === 30 ? "Вы прайшлі віктарыну й набралі 30 балаў" : `Вы прайшлі віктарыну й набралі ${score} балаў з 30 магчымых `}</div>
            <div className="button" onClick={() => resetGame()}>Паспрабаваць яшчэ раз</div>
        </div>
    )
}
export default EndGame;