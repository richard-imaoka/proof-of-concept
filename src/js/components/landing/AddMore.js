import React from 'react'
import { showEditor } from '../../actions/editorActions'

export default class AddMore extends React.Component {
  render() {
    return <button onClick={this.onClick.bind(this)}>add</button>;
  }

  onClick() {
    this.props.store.dispatch(showEditor("SelectorEditor", this.props.index));
  }
}