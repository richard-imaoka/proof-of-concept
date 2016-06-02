import { Map } from 'immutable'
import { SHOW_EDITOR, CLOSE_EDITOR } from "../../actions/editorActions"
import prettyPrint from "../../print/prettyPrint"

export default function gitHubReducer(state = Map(), action = undefined){
  switch(action.type) {
    case SHOW_EDITOR:
      console.log("action received", prettyPrint(action));
      return Map( { user: action.user, repository: action.repository } );
    default:
      return state;
  }
}