import {actions} from '../actions/messages'

export default function(state = [], action){
  if(action.type === actions.ADD_MESSAGE){
    return [].concat(state).concat([action.message]);
  } else {
    return state;
  }
}
