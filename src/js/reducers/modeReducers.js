import { TOP_PAGE_MODE, LANDING_PAGE_MODE } from "../actions/modeActions"

export default function editorReducer(state = TOP_PAGE_MODE, action = undefined){
  switch(action.type) {
    case TOP_PAGE_MODE:
    case LANDING_PAGE_MODE:
      return action.type;
    default:
      return state;
  }
}