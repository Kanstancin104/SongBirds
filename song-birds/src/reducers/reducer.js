import { SET_SCORE, SET_LEVEL, SET_GAME } from "../actions/actions-types";

export const initialState = {
  score:0,
  level:6,
  game: false
}

function applicationReducer(state = initialState, action) {
    switch (action.type) {
      case SET_SCORE:
        return {
          ...state, 
          score:action.payload
        }
        case SET_LEVEL:
          return {
            ...state,
            level:action.payload
          }
        case SET_GAME:
          return {
            ...state,
            game:action.payload
          }
      default:
        return state
    }
  }

  export default applicationReducer;