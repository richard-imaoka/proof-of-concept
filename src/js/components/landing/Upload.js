import React from 'react'
import ReactDOMServer  from 'react-dom/server'
import js_beautify     from 'js-beautify'
import {getLandingContents} from '../../reducers/rootReducer'
import {pickImage}          from '../../reducers/contentsReducer'
import {updateContent}      from '../../actions/contentActions'
import LandingHtml          from './LandingHtml'
import ajaxPromise          from  '../../main/ajaxPromise'
import firebaseUpload       from  '../../main/firebasePromise'
import {addCss}             from  '../../actions/landingCssActions'
import {addJs}              from  '../../actions/landingJsActions'
import {setProgress, startUpload, clearProgress} from  '../../actions/uploadProgressActions'
import {showURL} from  '../../actions/gotoFirebaseActions'


export default class Uplaod extends React.Component {
  render() {
    return(
      <div className="upload-background">
        <div className="container" >
          <div className="row">
            <button className="button-blue expand-width" onClick={this.onClick.bind(this)}>Upload and Save</button>
          </div>
        </div>
      </div>
    );
  }

  onClick() {
    Promise.all( [ this.uploadCSS(), this.uploadJS(),  this.uploadPictures() ] )
      .then( () => { return this.uploadHTML(); } )
      .then( url => {
        this.props.store.dispatch(clearProgress());
        this.props.store.dispatch(showURL(url));
      });
  }

  uploadSinglePicture(pictureContent){
    const index    = pictureContent.get("index");
    const fileName = pictureContent.get("fileName");
    const fileObj  = pictureContent.get("fileObj");

    this.props.store.dispatch(startUpload(fileName));

    const onFirebaseStateChange = (snapshot) => {
      const progressPercentage = Math.round(100 * snapshot.bytesTransferred / snapshot.totalBytes);
      this.props.store.dispatch(setProgress(fileName, progressPercentage));
    };

    return firebaseUpload(fileObj, fileName, onFirebaseStateChange.bind(this))
      .then( uploadFileURL => {
        this.props.store.dispatch(updateContent(index, pictureContent.set("src", uploadFileURL)));
      })
      .catch( error => {
        console.log("failed to upload file to firebase", error);
      });
  }

  uploadPictures(){
    //assigning index needs to be here, otherwise, the actual index of the list and index field inside element gets out of sync quickly
    let index = 0;
    let pictures = getLandingContents(this.props.store.getState()).map( c => c.set("index", index++) ).filter( pickImage );
    return Promise.all( pictures.map( pictureContent => this.uploadSinglePicture( pictureContent ) ) );
  }

  uploadCSS(){
    this.props.store.dispatch(startUpload("main.css"));

    const onFirebaseStateChange = (snapshot) => {
      const progressPercentage = Math.round(100 * snapshot.bytesTransferred / snapshot.totalBytes);
      this.props.store.dispatch(setProgress("main.css", progressPercentage));
    };

    return ajaxPromise("css/main.css")
      .then(cssString => new Blob([cssString], {type: "text/css"}) )
      .then(blob => firebaseUpload(blob, "main.css", onFirebaseStateChange.bind(this)))
      .then(url => this.props.store.dispatch(addCss(url)));
  }

  uploadSingleJsFile(fileName){
    this.props.store.dispatch(startUpload(fileName));

    const onFirebaseStateChange = (snapshot) => {
      const progressPercentage = Math.round(100 * snapshot.bytesTransferred / snapshot.totalBytes);
      this.props.store.dispatch(setProgress(fileName, progressPercentage));
    };

    return ajaxPromise("js/" + fileName)
      .then(jsString => new Blob([jsString], {type: "text/javascript"}) )
      .then(blob => firebaseUpload(blob, fileName, onFirebaseStateChange.bind(this)))
      .then(url => this.props.store.dispatch(addJs(url)));
  }

  uploadJS(){
    return Promise.all( ["load-image.all.min.js", "canvas.js", "twitter-share.js" ].map( this.uploadSingleJsFile.bind(this)) );
  }

  uploadHTML(){
    const htmlString =
      "<DOCTYPE! html>\n" +
      js_beautify.html( ReactDOMServer.renderToStaticMarkup( <LandingHtml landing={this.props.store.getState().get("landing")} /> ) );

    this.props.store.dispatch(startUpload("index.html"));

    const onFirebaseStateChange = (snapshot) => {
      const progressPercentage = Math.round(100 * snapshot.bytesTransferred / snapshot.totalBytes);
      this.props.store.dispatch(setProgress("index.html", progressPercentage));
    };

    return firebaseUpload(new Blob([htmlString], {type: "text/html"}), "index.html", onFirebaseStateChange.bind(this));
  }
}
