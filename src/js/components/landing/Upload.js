import React from 'react'
import ReactDOMServer  from 'react-dom/server'
import js_beautify     from 'js-beautify'
import {getLandingContents} from '../../reducers/rootReducer'
import {pickImage}          from '../../reducers/contentsReducer'
import {updateContent}      from '../../actions/contentActions'
import LandingHtml          from './LandingHtml'
import ajaxPromise          from  '../../main/ajaxPromise'
import firebaseUpload       from  '../../main/firebasePromise'

export default class Uplaod extends React.Component {
  render() {
    return <button onClick={this.onClick.bind(this)}>upload</button>;
  }

  onClick() {
    Promise.all( this.uploadCSS() ).then( value => {
      //console.log( js_beautify.html( ReactDOMServer.renderToStaticMarkup( <LandingHtml store={this.props.store} /> ) ) );
    });
  }

  uploadSinglePicture(pictureContent){
    const index    = pictureContent.get("index");
    const fileName = pictureContent.get("fileName");
    const fileObj  = pictureContent.get("fileObj")

    firebaseUpload(fileObj, fileName)
      .then( uploadFileURL => {
        this.props.store.dispatch(updateContent(index, pictureContent.set("src", uploadFileURL)));
      })
      .catch( error =>
        console.log("failed to upload file to firebase", error )
      );
  }

  uploadPictures(){
    //assigning index needs to be here, otherwise, the actual index of the list and index field inside element gets out of sync quickly
    let index = 0;
    let pictures = getLandingContents(this.props.store.getState()).map( c => c.set("index", index++) ).filter( pickImage );
    return pictures.map( pictureContent => this.uploadSinglePicture( pictureContent ) );
  }

  uploadCSS(){
    return ajaxPromise("css/main.css")
      .then(cssString => new Blob([cssString], {type: "text/css"}) )
      .then(blob => firebaseUpload(blob, "main.css"));
  }

  allUploads(){
    this.uploadCSS().concat(this.uploadPictures());
  }

}
