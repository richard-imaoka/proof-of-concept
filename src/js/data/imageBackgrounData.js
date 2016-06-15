import {Map} from 'immutable'
import ImageBackgroundContent from '../components/contents/ImageBackgroundContent'
import ImageBackgroundContentEditor from '../components/editors/ImageBackgroundContentEditor'

export default function imageBackgroundData(
  title="The greatest project ever",
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
){
  return Map( {
    type :       ImageBackgroundContent,
    editor:      ImageBackgroundContentEditor,
    title:       title,
    description: description
  } );
}