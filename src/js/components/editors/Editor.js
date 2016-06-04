import React from 'react'

export default class Editor extends React.Component {
  render() {
    return <div>Editor<span>{this.props.index}</span><span>{this.props.type}</span></div>;
  }
}