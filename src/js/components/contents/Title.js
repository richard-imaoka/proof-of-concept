import React from 'react'
import {showEditor} from '../../actions/editorActions'

export default class Title extends React.Component {
  render() {
    return <div onClick={this.onClick.bind(this)}>Title</div>;
  }
  
  onClick() {
    this.props.store.dispatch(showEditor("TitleEditor", this.props.index));
  }
}