import {actions} from '../actions/users'

export default function(state = [], action){
  switch (action.type){
    case actions.USERS_LIST:
      // Don't display users with no nickname
      return action.users.filter(user => user.nickname);
    case actions.ADD_USER:
      if(action.user.nickname){
        const users = state.filter(user => user.id !== action.user.id);
        return [...users, action.user];
      } else {
        return state;
      }
    break;
    case actions.DEL_USER:
      return state.filter(user => user.id !== action.user);
    default:
      return state;
  }
}
