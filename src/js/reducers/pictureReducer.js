import { List, Map } from 'immutable'
import { APPEND_CONTENT, INSERT_CONTENT, REMOVE_CONTENT, UPDATE_CONTENT } from "../actions/contentActions"

export default function contents(state = List(), action = undefined){
  switch(action.type) {
    case LOAD_PICTURE:
      return state.push(Map({contentType: action.contentType, data: action.data}));
    case READ_PICTURE:
      return state.insert(action.index, Map({contentType: action.contentType, data: action.data}) );
    case UPDATE_CONTENT:
      return state.set(   action.index, Map({contentType: action.contentType, data: action.data}) );
    case REMOVE_CONTENT:
      return state.remove(action.index);
    default:
      return state;
  }
}