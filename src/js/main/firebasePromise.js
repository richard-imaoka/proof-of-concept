export default function firebaseUpload(fileObj, fileName, onStateChange = ()=>{}) {
  let user       = firebase.auth().currentUser;
  let storageRef = firebase.storage().ref();

  return new Promise( (resolve, reject) => {
    let uploadTask = storageRef.child(user.uid + "/" + fileName).put(fileObj);

    uploadTask.on('state_changed',
      //1. 'state_changed' observer, called any time the state changes
      snapshot => {
        console.log(snapshot);
        onStateChange(snapshot);
      },
      //2. Error observer, called on failure
      error => {
        reject(error);
      },
      //3. Completion observer, called on successful completion
      () => {
        resolve(uploadTask.snapshot.downloadURL);
      }
    )
  });
}
