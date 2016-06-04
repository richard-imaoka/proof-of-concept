import { combineReducers } from 'redux-immutable'
import mode     from './modeReducers'
import front    from './frontReducer'
import landing  from './landingReducer'
import prettyString from "../print/prettyString"

export default combineReducers({
  log,
  mode,
  front,
  landing
});

function log(state = null, action = undefined)  {
  console.log( "action received", prettyString(action));
  return state;
}