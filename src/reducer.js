import * as actionTypes from './actionTypes.js';

let count = 0;

const initialState = {
  counter: count
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_COUNTER:
      return {
        ...state,
        counter: ++count
      }
    case actionTypes.SUBTRACT_COUNTER:
      return {
        ...state,
        counter: --count
      }
    case actionTypes.RESET_COUNTER:
      count = 0;
      return {
        ...state,
        counter: count
      }
    default:
      return state;
  }
}