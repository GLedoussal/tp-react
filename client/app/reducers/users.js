import {actions} from '../actions/users'

export default function(state = [], action){
  switch (action.type){
    case actions.USERS_LIST:
      // Don't display users with no nickname
      return action.users.filter(user => user.nickname).map(user => {
        return Object.assign({}, user, {
          online: true
        });
      });
    case actions.ADD_USER:
      if(action.user.nickname){
        const users = state.filter(user => user.id !== action.user.id);
        return [...users, Object.assign({}, action.user, {online: true})];
      } else {
        return state;
      }
    break;
    case actions.DEL_USER:
      return state.map(user => {
        if(user.id === action.user){
          return Object.assign({}, user, {
            online: false
          });
        } else {
          return user;
        }
      });
    default:
      return state;
  }
}
