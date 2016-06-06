import React from 'react'
import {updateContent} from '../../actions/contentActions'
import {closeEditor}   from '../../actions/editorActions'
import pictureData     from '../../data/pictureData'

export default class PictureEditor extends React.Component {
  render() {
    return (
      <div>PictureEditor
        <input ref="input" type="file" />
        <button onClick={this.onClickPick.bind(this)}>show file name</button>
        <button onClick={this.onClick.bind(this)}>done</button>
      </div>
    );
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