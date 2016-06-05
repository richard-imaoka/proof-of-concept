import { Map, fromJS } from 'immutable'
import { SHOW_EDITOR, CLOSE_EDITOR } from "../actions/editorActions"

export default function editorReducer(state = Map(), action = undefined){
  switch(action.type) {
    case SHOW_EDITOR:
      return Map( { actionType: action.type, editorType: action.editorType, data: fromJS(action.data) } );
    case CLOSE_EDITOR:
      return state.set( "actionType", action.type );
    default:
      return state;
  }
}