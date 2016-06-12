import {Map,List}      from 'immutable'
import iconData from './iconData'

export default function featureListData(numIconContents=0){
  return Map({
    type    : "FeatureList",
    features: List([
      iconData("Great Feature",        "Lorem ipsum dolor sit amet, consectetur adipiscing.", "bullhorn"),
      iconData("Ever Greater Feature", "Lorem ipsum dolor sit amet, consectetur adipiscing.", "bank"),
      iconData("Nothing seconds me",   "Lorem ipsum dolor sit amet, consectetur adipiscing.", "bolt")
    ])
  });
}