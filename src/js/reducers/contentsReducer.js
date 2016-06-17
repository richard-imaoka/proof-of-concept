import { List, Map } from 'immutable'
import { APPEND_CONTENT, INSERT_CONTENT, REMOVE_CONTENT, UPDATE_CONTENT } from "../actions/contentActions"
import ImageContent           from '../components/contents/ImageContent'
import ImageBackgroundContent from '../components/contents/ImageBackgroundContent'

export default function contents(state = List(), action = undefined){
  switch(action.type) {
    case APPEND_CONTENT:
      return state.push(action.data);
    case INSERT_CONTENT:
      return state.insert(action.index.get(0), action.data);
    case UPDATE_CONTENT:
      return state.set(action.index, action.data);
    case REMOVE_CONTENT:
      return state.remove(action.index);
    default:
      return state;
  }
}

export function getPictures(state) {
  return state.filter( x => x.get("type") === ImageContent || x.get("type") === ImageBackgroundContent )
}