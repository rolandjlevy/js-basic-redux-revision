import * as actionTypes from './actionTypes.js';

const counterAdd = () => {
  return {
    type: actionTypes.ADD_COUNTER
  }
}

const counterSubtract = () => {
  return {
    type: actionTypes.SUBTRACT_COUNTER
  }
}

const counterReset = () => {
  return {
    type: actionTypes.RESET_COUNTER
  }
}

export {
  counterAdd,
  counterSubtract,
  counterReset
}