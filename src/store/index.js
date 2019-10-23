import {createStore} from 'redux';
// import logger from 'redux-logger';
import {reducer} from './reducer.js';

export default createStore(
  reducer
)