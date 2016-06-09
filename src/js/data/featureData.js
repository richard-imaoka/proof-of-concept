import {Map} from 'immutable'

export default function featureData(feature="", description="", icon=""){
  return Map({
    type:        "Feature",
    feature:     feature,
    description: description,
    icon:        icon
  });
}