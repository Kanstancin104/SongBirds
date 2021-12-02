import { useSelector, useDispatch } from "react-redux"
import './Button.scss';

function Button() {
    const game = useSelector(state => state.app.game)

    return (
        <div className="button">
            <div className="button">{game?"Гуляць далей":"Угадайте"}</div>
        </div>
    );
}

export default Button;