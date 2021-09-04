import applicationReducer from "./reducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    app:applicationReducer
})

export default rootReducer;