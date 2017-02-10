import { createStore, combineReducers } from 'redux'
import messagesReducer from './reducers/messages'

const reducers = combineReducers({
  messagesReducer
});

export default createStore(reducers);
