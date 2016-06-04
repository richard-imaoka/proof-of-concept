import { Map } from 'immutable'
import { SHOW_EDITOR, CLOSE_EDITOR } from "../actions/editorActions"

export default function gitHubReducer(state = Map(), action = undefined){
  switch(action.type) {
    case SHOW_EDITOR:
      return Map( { user: action.user, repository: action.repository } );
    default:
      return state;
  }
}