import { combineReducers } from 'redux-immutable'
import editor   from './editorReducer'
import mode     from './modeReducers'
import sections from './sectionsReducer'

export default combineReducers({
  editor,
  mode,
  sections
});

