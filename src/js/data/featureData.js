import {Map} from 'immutable'

export default function featureData(feature="", description="", icon=""){
  return Map({
    feature:     feature,
    description: description,
    icon:        icon
  });
}