import {Map}          from 'immutable'
import HowToUse       from '../components/contents/HowToUse'
import HowToUseEditor from '../components/editors/HowToUseEditor'

export default function howToUseData(){
  return Map({
    type  : HowToUse,
    editor: HowToUseEditor
  });
}