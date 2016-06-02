import { List } from 'immutable'
import { ADD_SECTION, REMOVE_SECTION } from "../actions/sectionActions"
import prettyPrint from "../print/prettyPrint"

export default function sectionsReducer(state = List(), action = undefined){
  switch(action.type) {
    case ADD_SECTION:
      console.log("action received", prettyPrint(action));
      return state.push();
    case REMOVE_SECTION:
      console.log("action received", prettyPrint(action));
      return state.remove(action.index);
    default:
      return state;
  }
}