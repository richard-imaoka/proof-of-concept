import { Map } from 'immutable'
import { SHOW_EDITOR, CLOSE_EDITOR } from "../actions/editorActions"

export default function featureReducer(state = Map(), action = undefined){
  switch(action.type) {
    case SHOW_EDITOR:
      return Map( { icon: action.icon, feature: action.feature, description: action.description } );
    default:
      return state;
  }
}