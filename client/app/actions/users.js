import ws from '../Socket'
import store from '../store'

export const actions = {
  USERS_LIST: 'USERS_LIST',
  ADD_USER: 'ADD_USER',
  DEL_USER: 'DEL_USER'
};

export function usersList(users){
  return {
    type: actions.USERS_LIST,
    users
  };
}

export function addUser(user){
  return {
    type: actions.ADD_USER,
    user
  };
}

export function delUser(user){
  return {
    type: actions.DEL_USER,
    user
  };
}

ws.on('userslist', users => store.dispatch(usersList(users)));
ws.on('useradd', user => store.dispatch(addUser(user)));
ws.on('userdel', user => store.dispatch(delUser(user)));
