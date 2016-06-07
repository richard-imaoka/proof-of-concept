import {Map} from 'immutable'

export default function pictureData(src, fileName){
  return Map({
    src     : src,
    fileName: fileName
  });
}