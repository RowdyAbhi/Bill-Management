import { createStore, combineReducers } from 'redux';
import billReducer from './billReducer';

const rootReducer = combineReducers({
  bills: billReducer,
});

const store = createStore(rootReducer);

export default store;
