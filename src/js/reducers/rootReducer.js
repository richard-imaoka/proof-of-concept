import { combineReducers } from 'redux-immutable'
import editor   from './editorReducer'
import mode     from './modeReducers'
import front    from './frontReducer'
import landing  from './landingReducer'
import prettyString from "../print/prettyString"

export default combineReducers({
  log,
  mode,
  front,
  landing,
  editor
});

function log(state = null, action = undefined)  {
  console.log( "action received", prettyString(action));
  return state;
}