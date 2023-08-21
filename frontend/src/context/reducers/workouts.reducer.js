import actionTypes from "../actions/action.types"

export const initialState = {
  workouts: null,
}

export function workoutsReducer(state, action) {
  switch(action.type) {
    case (actionTypes.SET_WORKOUTS):
      return {
        ...state,
        workouts: action.payload,
      };
    case (actionTypes.CREATE_WORKOUT):
      return {
        ...state,
        workouts: [ action.payload, ...state.workouts ]
      }  
    default:
      return state;
  }
}