import {Map} from 'immutable'
import Picture from '../components/contents/Picture'
import PictureEditor from '../components/editors/PictureEditor'

export default function pictureData(src="", fileObj=undefined){
  return Map({
    type    : Picture,
    editor  : PictureEditor,
    src     : src,
    fileObj : fileObj
  });
}