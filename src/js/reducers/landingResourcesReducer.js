import { Map } from 'immutable'
import { SET_CSS, SET_JS } from "../actions/landingResourcesActions"

export default function contents(state = Map(), action = undefined){
  switch(action.type) {
    case SET_CSS:
      return state.set("css", action.url);
    case SET_JS:
      return state.set("js", action.url);
    default:
      return state;
  }
}