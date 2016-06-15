import {Map} from 'immutable'
import Social from '../components/contents/Social'
import SocialEditor from '../components/editors/SocialContentEditor'

export default function socialData(){
  return Map({
    type: Social,
    editor: SocialEditor
  });
}