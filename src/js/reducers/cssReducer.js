import { SET_CSS } from "../actions/cssActions"

export default function contents(state = "css/main", action = undefined){
  switch(action.type) {
    case SET_CSS:
      return action.url;
    default:
      return state;
  }
}