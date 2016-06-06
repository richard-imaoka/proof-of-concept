import React from 'react'
import {showEditor} from '../../actions/editorActions'

export default class Picture extends React.Component {
  render() {
    return <div onClick={this.onClick.bind(this)}>Picture</div>;
  }
  
  onClick() {
    this.props.store.dispatch(showEditor("PictureEditor", this.props.index));
  }
}