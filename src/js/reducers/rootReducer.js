import { combineReducers } from 'redux-immutable'
import mode     from './modeReducers'
import front    from './frontReducer'
import landing,  * as fromLanding from './landingReducer'
import prettyString from "../print/prettyString"

export default combineReducers({
  log,
  mode,
  front,
  landing
});


export function getPictures(state) {
  return fromLanding.getPictures( state.get("landing") );
}

function log(state = null, action = undefined)  {
  console.log( "action received", prettyString(action));
  return state;
}