import { combineReducers } from 'redux-immutable'
import contents, * as fromContents from "./contentsReducer"
import editor   from './editorReducer'
import uploadProgress from './uploadProgressReducer'
import gotoFirebase from './gotoFireabaseReducer'
import landingResources from './landingResourcesReducer'

export default combineReducers({
  contents,
  editor,
  uploadProgress,
  gotoFirebase,
  landingResources
});

export function getPictures(state) {
  return fromContents.getPictures( state.get("contents") );
}

export function getContents(state){
  return state.get("contents");
}