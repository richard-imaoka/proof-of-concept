import { List } from 'immutable'
import { ADD_CSS, CLEAR_CSS } from "../actions/landingCssActions"

export default function landingCssReducer(state = List(), action = undefined){
  switch(action.type) {
    case ADD_CSS:
      return state.push(action.url);
    case CLEAR_CSS:
      return List();
    default:
      return state;
  }
}