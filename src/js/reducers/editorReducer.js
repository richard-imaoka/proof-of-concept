import { Map } from 'immutable'
import { SHOW_CONTENT_EDITOR, CLOSE_CONTENT_EDITOR } from "../actions/contentEditorActions"

export default function editorReducer(state = Map(), action = undefined){
  switch(action.type) {
    case SHOW_CONTENT_EDITOR:
      return Map( { actionType: action.Type, contentType: action.contentType, data: action.data } );
    case CLOSE_CONTENT_EDITOR:
      return state.set( "actionType", action.path );
    default:
      return state;
  }
}