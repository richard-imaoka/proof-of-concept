import React from 'react'
import Step from './Step'
import {showEditor} from '../../actions/editorActions'
import howToUseData from '../../data/howToUseData'

export default class HowToUse extends React.Component {
  render() {
    return (
      <div onClick={this.onClick.bind(this)}>
        <Step store={this.props.store} data={this.props.data}/>
        <Step store={this.props.store} data={this.props.data}/>
        <Step store={this.props.store} data={this.props.data}/>
      </div>
    );
  }

  onClick() {
    this.props.store.dispatch(showEditor(this.props.index, howToUseData()));
  }
}