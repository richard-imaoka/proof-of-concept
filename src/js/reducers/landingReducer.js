import { combineReducers } from 'redux-immutable'
import contents, * as fromContents from "./contentsReducer"
import editor   from './editorReducer'

export default combineReducers({
  contents,
  editor
});

export function getPictures(state) {
  return fromContents.getPictures( state.get("contents") );
}

export function getContents(state){
  return state.get("contents");
}