import { List, Map, fromJS } from 'immutable'
import { APPEND_CONTENT, INSERT_CONTENT, REMOVE_CONTENT } from "../actions/contentActions"

export default function contents(state = List(), action = undefined){
  switch(action.type) {
    case APPEND_CONTENT:
      return state.push(Map({contentType: action.contentType, data: fromJS(action.data)}));
    case INSERT_CONTENT:
      return state.insert(action.index, Map({contentType: action.contentType, data: fromJS(action.data)}) );
    case REMOVE_CONTENT:
      return state.remove(action.index);
    default:
      return state;
  }
}