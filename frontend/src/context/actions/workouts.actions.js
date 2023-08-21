import actionTypes from "./action.types";

export function setAllWorkouts(workouts) {
  return {
    type: actionTypes.SET_WORKOUTS,
    payload: workouts
  }
}

export function createNewWorkout(workout) {
  return {
    type: actionTypes.CREATE_WORKOUT,
    payload: workout
  }
}
