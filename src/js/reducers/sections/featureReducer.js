import { Map } from 'immutable'
import { SHOW_EDITOR, CLOSE_EDITOR } from "../../actions/editorActions"
import prettyPrint from "../../print/prettyPrint"

export default function featureReducer(state = Map(), action = undefined){
  switch(action.type) {
    case SHOW_EDITOR:
      console.log("action received", prettyPrint(action));
      return Map( { icon: action.icon, feature: action.feature, description: action.description } );
    default:
      return state;
  }
}