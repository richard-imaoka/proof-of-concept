import {Map}             from 'immutable'
import IconContent       from '../components/contents/IconContent'
import IconContentEditor from '../components/editors/IconContentEditor'

export default function iconData(
  feature="",
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  icon="camera-retro") {
  return Map({
    type:        IconContent,
    editor :     IconContentEditor,
    feature:     feature,
    description: description,
    icon:        icon
  });
}