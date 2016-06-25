import {Map} from 'immutable'
import {SET_PROGRESS, START_UPLOAD} from '../actions/uploadProgressActions'

export default function uploadProgress(state = Map(), action = undefined){
  switch(action.type) {
    case START_UPLOAD:
      return state.set(action.fileName, Map({fileName: action.fileName, progress: 0}));
    case SET_PROGRESS:
      return state.set(action.fileName, Map({fileName: action.fileName, progress: action.progress}));
    default:
      return state;
  }
}
