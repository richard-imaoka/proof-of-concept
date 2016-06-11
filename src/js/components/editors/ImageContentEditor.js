import React from 'react'
import {updateContent} from '../../actions/contentActions'
import {closeEditor}   from '../../actions/editorActions'
import pictureData     from '../../data/pictureData'

export default class ImageEditor extends React.Component {
  render() {
    return (
      <div>PictureEditor
        <input ref="input" type="file" onChange={this.onChangeImage.bind(this)} />
        <button onClick={this.onClickPick.bind(this)}>show file name</button>
        <button onClick={this.onClick.bind(this)}>done</button>
      </div>
    );
  }

  onChangeImage(domEvent) {
    //store.dispatch(LOAD_IMAGE)

    let fileObj  = domEvent.target.files[0];
    let reader = new FileReader();

    reader.onload = fileEvent => {
      console.log('wheefee');
      let src = fileEvent.target.result;
      this.props.store.dispatch(
        updateContent(
          this.props.index,
          "Picture",
          pictureData( src, fileObj ) //src
        )
      );
    }
    reader.readAsDataURL(fileObj);
  }

  onClickPick(){
    window.alert(this.refs.input.value);
  }

  componentWillReceiveProps(props){
    console.log(this.refs.input.value);
  }


  onClick() {
    this.props.store.dispatch(updateContent(this.props.index, "Picture", pictureData()));
    this.props.store.dispatch(closeEditor());
  }

}