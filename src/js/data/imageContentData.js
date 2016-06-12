import {Map} from 'immutable'
import ImageContent from '../components/contents/ImageContent'
import ImageContentEditor from '../components/editors/ImageContentEditor'

export default function imageContentData(
  title="The greatest project ever",
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
){
  return Map( {
    type :       ImageContent,
    editor:      ImageContentEditor,
    title:       title,
    description: description
  } );
}