import {List}      from 'immutable'
import featureData from './featureData'

export default function featureListData(numFeatures=0){
  return List( Array(numFeatures).fill(featureData()));
}