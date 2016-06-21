import React from 'react'
import ReactDOMServer  from 'react-dom/server'
import js_beautify     from 'js-beautify'
import {getLandingContents} from '../../reducers/rootReducer'
import {pickImage}          from '../../reducers/contentsReducer'
import {updateContent}      from '../../actions/contentActions'
import LandingHtml          from './LandingHtml'

export default class Uplaod extends React.Component {
  render() {
    return <button onClick={this.onClick.bind(this)}>upload</button>;
  }

  onClick() {
    Promise.all( this.uploadPictures() ).then( value => {
      window.alert(value);
      console.log( js_beautify.html( ReactDOMServer.renderToStaticMarkup( <LandingHtml store={this.props.store} /> ) ) );
    });
  }

  uploadSinglePicture(user, storageRef, pictureContent ){
    const index    = pictureContent.get("index");
    const fileName = pictureContent.get("fileName");
    const fileObj  = pictureContent.get("fileObj")
    
    return new Promise((resolve, reject) => {
      if(fileObj === undefined){
        return reject("fileObj undefined");
      }
      else{
        let uploadTask = storageRef.child(user.uid + "/" + fileName).put(fileObj, { contentType: fileObj.type });

        uploadTask.on('state_changed',
          //1. 'state_changed' observer, called any time the state changes
          snapshot => {},
          //2. Error observer, called on failure
          error => {reject(error);},
          //3. Completion observer, called on successful completion
          () => {
            const URL = uploadTask.snapshot.downloadURL;
            this.props.store.dispatch(updateContent(index, pictureContent.set("src", URL)));
            resolve({ index: index, url: URL });
          }
        )      }

    });
  }

  uploadPictures(){
    let user       = firebase.auth().currentUser;
    let storageRef = firebase.storage().ref();

    //assigning index needs to be here, otherwise, the actual index of the list and index field inside element gets out of sync quickly
    let index = 0;
    let pictures = getLandingContents(this.props.store.getState()).map( c => c.set("index", index++) ).filter( pickImage );

    return pictures.map( pictureContent => this.uploadSinglePicture( user, storageRef, pictureContent ) );
  }

}
