import { combineReducers } from 'redux-immutable'
import contents from "./contentsReducer"
import editor   from './editorReducer'

export default combineReducers({
  contents,
  editor
});
