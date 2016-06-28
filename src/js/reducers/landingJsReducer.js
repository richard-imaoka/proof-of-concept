import { List } from 'immutable'
import { ADD_JS, CLEAR_JS } from "../actions/landingJsActions"

export default function landingJsReducer(state = List(), action = undefined){
  switch(action.type) {
    case ADD_JS:
      return state.push(action.url);
    case CLEAR_JS:
      return List();
    default:
      return state;
  }
}