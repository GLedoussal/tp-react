import { createStore, combineReducers } from 'redux'
import messagesReducer from './reducers/messages'
import usersReducer from './reducers/users'

const reducers = combineReducers({
  messagesReducer,
  usersReducer
});

export default createStore(reducers);
