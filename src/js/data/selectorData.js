import {Map} from 'immutable'
import SelectorEditor from '../components/editors/SelectorEditor'

export default function selectorData(){
  return Map({
    type    : "Selector",
    editor  : SelectorEditor
  });
}