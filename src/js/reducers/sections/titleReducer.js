import { Map } from 'immutable'
import { SHOW_EDITOR, CLOSE_EDITOR } from "../actions/cssActions"
import prettyPrint from "../print/prettyPrint"

export default function titleReducer(state = Map(), action = undefined){
  switch(action.type) {
    case SHOW_EDITOR:
      console.log("action received", prettyPrint(action));
      return Map( { title: action.title, description: action.description } );
    default:
      return state;
  }
}