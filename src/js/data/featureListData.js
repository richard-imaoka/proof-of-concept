import {Map,List}        from 'immutable'
import iconData          from './iconData'
import FeatureList       from '../components/contents/FeatureList'
import FeatureListEditor from '../components/editors/FeatureListEditor'

export default function featureListData(numIconContents=0){
  return Map({
    type    : FeatureList,
    editor  : FeatureListEditor,
    features: List([
      iconData("Great Feature",        "Lorem ipsum dolor sit amet, consectetur adipiscing.", "bullhorn"),
      iconData("Ever Greater Feature", "Lorem ipsum dolor sit amet, consectetur adipiscing.", "bank"),
      iconData("Nothing seconds me",   "Lorem ipsum dolor sit amet, consectetur adipiscing.", "bolt")
    ])
  });
}