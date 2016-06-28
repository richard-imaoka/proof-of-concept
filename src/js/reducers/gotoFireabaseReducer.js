import {Map} from 'immutable'
import {CLEAR_URL, SHOW_URL} from '../actions/gotoFirebaseActions'

export default function uploadProgress(state = Map(), action = undefined){
  switch(action.type) {
    case SHOW_URL:
      return state.set("url", action.url);
    case CLEAR_URL:
      return Map();
    default:
      return state;
  }
}
