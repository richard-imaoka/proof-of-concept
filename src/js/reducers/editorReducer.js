import { Map } from 'immutable'
import { SHOW_EDITOR, CLOSE_EDITOR } from "../actions/editorActions"

export default function editorReducer(state = Map({data: Map()}), action = undefined){
  switch(action.type) {
    case SHOW_EDITOR:
      return Map( { actionType: action.type, index: action.index, data: action.data } );
    case CLOSE_EDITOR:
      return state.set( "actionType", action.type );
    default:
      return state;
  }
}