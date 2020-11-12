import { combineReducers, createStore } from 'redux';
import { inputsReducer } from './inputsReducer';
import { stockReducer } from './stockReducer';
import { switchReducer } from './switchReducer';

const rootReducer = combineReducers({
    inputs : inputsReducer,
    stock: stockReducer,
    switchReducer: switchReducer
  })

export const store = createStore(rootReducer);