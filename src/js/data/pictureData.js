import {Map} from 'immutable'

export default function pictureData(src="", fileObj=undefined){
  return Map({
    type    : "Picture",
    src     : src,
    fileObj : fileObj
  });
}