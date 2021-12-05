import { useSelector, useDispatch } from "react-redux"
import './Button.scss';
import { setApplicationState } from '../../../../actions/actions-creator'
import { setApplicationScore } from '../../../../actions/actions-creator'
import { SET_GAME, SET_LEVEL, SET_SCORE } from "../../../../actions/actions-types"

function Button() {
    const game = useSelector(state => state.app.game)
    let level = useSelector(state => state.app.level)
    const dispatch = useDispatch()
    const onChain =()=>{
        if (game) {
            dispatch(
                setApplicationScore(SET_LEVEL, level += 1)
            )
        }
        dispatch(
            setApplicationState(SET_GAME, false)
        )
    }

    return (
        <div onClick={() => onChain()} className="button">
            <div className="button">{game?"Гуляць далей":"Угадайте"}</div>
        </div>
    );
}

export default Button;