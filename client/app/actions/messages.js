import ws from '../Socket'
import store from '../store'

export const actions = {
  ADD_MESSAGE: 'ADD_MESSAGE'
};

export function addMessage(message){
  return {
    type: actions.ADD_MESSAGE,
    message
  };
}

ws.on('msg', message => store.dispatch(addMessage(message)));
