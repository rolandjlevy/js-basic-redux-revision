import { $, $$ } from './src/utils.js';
import * as actions from './src/actions.js';
import reducer from './src/reducer.js';
const store = Redux.createStore(reducer);

$('#add').addEventListener('click', (e) => {
  store.dispatch(actions.counterAdd());
  updateCounter();
});

$('#subtract').addEventListener('click', (e) => {
  store.dispatch(actions.counterSubtract());
  updateCounter();
});

$('#reset').addEventListener('click', (e) => {
  store.dispatch(actions.counterReset());
  updateCounter();
});

const updateCounter = () => {
  $('#counter').textContent = store.getState().counter;
}