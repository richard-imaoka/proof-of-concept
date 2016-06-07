import React from 'react'
import {showEditor} from '../../actions/editorActions'

export default class Picture extends React.Component {
  render() {
    return (
      <div onClick={this.onClick.bind(this)}>
        <div>Picture</div>
        <img src={this.props.data.get("src")} />
      </div>
    );
  }

  onClick() {
    this.props.store.dispatch(showEditor(this.props.index, "PictureEditor"));
  }
}