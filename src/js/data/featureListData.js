import {Map,List}      from 'immutable'
import featureData from './featureData'

export default function featureListData(numIconContents=0){
  return Map({
    type    : "FeatureList",
    features: List([
      featureData("Great Feature",        "Lorem ipsum dolor sit amet, consectetur adipiscing.", "bullhorn"),
      featureData("Ever Greater Feature", "Lorem ipsum dolor sit amet, consectetur adipiscing.", "bank"),
      featureData("Nothing seconds me",   "Lorem ipsum dolor sit amet, consectetur adipiscing.", "bolt")
    ])
  });
}