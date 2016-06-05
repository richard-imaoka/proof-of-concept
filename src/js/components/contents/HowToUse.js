import React from 'react'
import Feature from './Feature'
import {showEditor} from '../../actions/editorActions'

export default class HowToUse extends React.Component {
  render() {
    return (
      <div onClick={this.onClick.bind(this)}>
        <Feature store={this.props.store} data={this.props.data}/>
        <Feature store={this.props.store} data={this.props.data}/>
        <Feature store={this.props.store} data={this.props.data}/>
      </div>
    );
  }

  onClick() {
    this.props.store.dispatch(showEditor("HowToUseEditor", this.props.index));
  }
}