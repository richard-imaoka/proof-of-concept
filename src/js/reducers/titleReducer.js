import { Map } from 'immutable'
import { SHOW_EDITOR, CLOSE_EDITOR } from "../actions/editorActions"
import prettyPrint from "../print/prettyString"

export default function titleReducer(state = Map(), action = undefined){
  switch(action.type) {
    case SHOW_EDITOR:
      return Map( { title: action.title, description: action.description } );
    default:
      return state;
  }
}