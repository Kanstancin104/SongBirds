import { useSelector, useDispatch } from "react-redux"
import './Button.scss';
import { setApplicationState } from '../../../../actions/actions-creator'
import { setApplicationScore } from '../../../../actions/actions-creator'
import { SET_GAME, SET_LEVEL } from "../../../../actions/actions-types"

function Button({
    setbirdNumber,
  }) {
    const mathRandom = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
      }
    const game = useSelector(state => state.app.game)
    let level = useSelector(state => state.app.level)
    const dispatch = useDispatch()
    const onChain =()=>{
        setbirdNumber(mathRandom(5))
        if (game) {
            dispatch(
                setApplicationScore(SET_LEVEL, level += 1)
            )
        }
        dispatch(
            setApplicationState(SET_GAME, false)
        )
    }

const onChangeButtonText = ()=>{
    if (game){
        if(level===5){
            return "Глядзець вынікі"
        }
        return "Гуляць далей"
    }
    else{
        return "Адгадайце"
    }
}

    return (
        <div onClick={() => onChain()} className="firstbutton">
            <div className="buttondiv">{onChangeButtonText()}</div>
        </div>
    );
}

export default Button;