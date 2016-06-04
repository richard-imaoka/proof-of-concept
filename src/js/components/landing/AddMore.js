import React from 'react'
import { showContentSelector } from '../../actions/contentSelectorActions'

export default class AddMore extends React.Component {
  render() {
    return <button onClick={this.onClick.bind(this)}>add</button>;
  }

  onClick() {
    this.props.store.dispatch(appendContent("blank"));
    this.props.store.dispatch(showContentSelector("selector", this.props.index));
  }
}