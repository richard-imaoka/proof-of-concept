import React from 'react'
import {getPictures} from '../../reducers/rootReducer'

export default class Uplaod extends React.Component {
  render() {
    return <button onClick={this.onClick.bind(this)}>upload</button>;
  }

  onClick() {

    let pictures = getPictures(this.props.store.getState());

    pictures.map( pictureContent => {
      let fileObj = pictureContent.get("data").get("fileObj");

      let storageRef = firebase.storage().ref();
      let uploadTask = storageRef.child(fileObj.name).put(fileObj, { contentType: fileObj.type });

      uploadTask.on('state_changed',
        snapshot => {},                      //1. 'state_changed' observer, called any time the state changes
        error    => {console.error(error);}, //2. Error observer, called on failure
        ()       => {                        //3. Completion observer, called on successful completion
          console.log("successfully uploaded " + fileObj.name );
        }
      )
    })
  }
}
