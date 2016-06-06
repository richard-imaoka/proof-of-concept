import React from 'react'
import {showEditor} from '../../actions/editorActions'

export default class Social extends React.Component {
  render() {
    return <div onClick={this.onClick.bind(this)}>Twitter</div>;
  }


  onClick() {
    this.props.store.dispatch(showEditor(this.props.index, "SocialEditor"));
  }
}