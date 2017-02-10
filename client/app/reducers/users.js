import {actions} from '../actions/users'

export default function(state = [], action){
  switch (action.type){
    case actions.USERS_LIST:
      return action.users;
    case actions.ADD_USER:
      const users = state.filter(user => user.id !== action.user.id);
      return [...users, action.user];
    case actions.DEL_USER:
      return state.filter(user => user.id !== action.user.id);
    default:
      return state;
  }
}
