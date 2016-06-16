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
  let saturatedAction = Object.assign({},action);
  if( action.data !== undefined ){
    let src = action.data.get("src");
    if(src !== undefined && src.length > 20 )
      saturatedAction.data = saturatedAction.data.set("src", src.substring(0, 20) + "..." );
  }

  console.log( "action received", prettyString(saturatedAction));
  return state;
}