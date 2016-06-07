import React from 'react'
import {updateContent} from '../../actions/contentActions'
import {closeEditor}   from '../../actions/editorActions'
import pictureData     from '../../data/pictureData'

export default class PictureEditor extends React.Component {
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

    let files = domEvent.target.files;
    let file  = files[0];
    let reader = new FileReader();

    reader.onload = fileEvent => {
      console.log('wheefee');
      this.props.store.dispatch(
        updateContent(
          this.props.index,
          "Picture",
          pictureData( fileEvent.target.result, file.name ) //src
        )
      );
    }
    reader.readAsDataURL(file);
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