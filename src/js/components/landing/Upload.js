import React from 'react'
import ReactDOMServer  from 'react-dom/server'
import js_beautify     from 'js-beautify'
import {getPictures} from '../../reducers/rootReducer'
import LandingPage from './LandingPage'

export default class Uplaod extends React.Component {
  render() {
    return <button onClick={this.onClick.bind(this)}>upload</button>;
  }

  onClick() {
    this.uploadPicture();
    console.log( js_beautify.html( ReactDOMServer.renderToStaticMarkup( <LandingPage store={this.props.store} landing={this.props.landing} /> ) ) );
  }

  uploadPicture(){
    let pictures = getPictures(this.props.store.getState());

    pictures.map( pictureContent => {
      let fileObj  = pictureContent.get("fileObj");
      let fileName = pictureContent.get("fileName");

      if(fileObj === undefined){
        return;
      }

      let user       = firebase.auth().currentUser;
      let storageRef = firebase.storage().ref();
      let uploadTask = storageRef.child(user.uid + "/" + fileName).put(fileObj, { contentType: fileObj.type });

      uploadTask.on('state_changed',
        snapshot => {},                      //1. 'state_changed' observer, called any time the state changes
        error    => {window.alert(error);},  //2. Error observer, called on failure
        ()       => {                        //3. Completion observer, called on successful completion
          window.alert("successfully uploaded " + fileName);
        }
      )
    })
  }


}
