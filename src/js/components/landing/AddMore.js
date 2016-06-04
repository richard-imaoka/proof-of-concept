import React from 'react'
import { appendContent } from '../../actions/contentActions'

export default class AddMore extends React.Component {
  render() {
    return <button onClick={this.onClick.bind(this)}>add</button>;
  }

  onClick() {
    this.props.store.dispatch(appendContent());
  }
}