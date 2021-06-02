import * as actionTypes from './actionTypes.js';

let count = 0;

const initialState = {
  counter: count
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_COUNTER:
      return {
        ...initialState,
        counter: ++count
      }
    case actionTypes.SUBTRACT_COUNTER:
      return {
        ...initialState,
        counter: --count
      }
    case actionTypes.RESET_COUNTER:
      return {
        ...initialState,
        counter: 0
      }
    default:
      state
  }
}