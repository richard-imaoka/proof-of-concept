import { List } from 'immutable'
import { APPEND_CONTENT, INSERT_CONTENT, REMOVE_CONTENT } from "../actions/contentActions"

export default function landing(state = List(), action = undefined){
  switch(action.type) {
    case APPEND_CONTENT:
      return state.push({something: "everything"});
    case INSERT_CONTENT:
      return state.insert(action.index, action.data );
    case REMOVE_CONTENT:
      return state.remove(action.index);
    default:
      return state;
  }
}