import { combineReducers } from 'redux-immutable'
import front    from './frontReducer'
import landing,  * as fromLanding from './landingReducer'
import mode      from './modeReducers'
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

export function getAvailableFileName(state, fileNameCandidate) {
  const pictureContents = getPictures(state);
  const conflicts = pictureContents.filter(
      x => x.get("fileObj") !== undefined && x.get("fileObj").name === fileNameCandidate );

  if(conflicts.size > 0)
    return fileNameCandidate.replace(".", "_" + ( conflicts.size  + 1 ).toString() + "." );
  else
    return fileNameCandidate;
}


export function getLandingContents(state) {
  return fromLanding.getContents( state.get("landing") );
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