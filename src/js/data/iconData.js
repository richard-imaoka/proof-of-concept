import {Map} from 'immutable'

export default function iconData(
  feature="",
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  icon="camera-retro") {
  return Map({
    type:        "IconContent",
    feature:     feature,
    description: description,
    icon:        icon
  });
}