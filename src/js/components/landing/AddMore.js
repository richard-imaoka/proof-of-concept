import React from 'react'
import { showContentEditor } from '../../actions/contentEditorActions'

export default class AddMore extends React.Component {
  render() {
    return <button onClick={this.onClick.bind(this)}>add</button>;
  }

  onClick() {
    this.props.store.dispatch(appendContent("blank"));
    this.props.store.dispatch(showContentEditor("selector", this.props.index));
  }
}