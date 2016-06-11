import React from 'react'
import {showEditor} from '../../actions/editorActions'
import stepData from '../../data/stepData'

export default class Step extends React.Component {
  render() {
    return (
      <div onClick={this.onClick.bind(this)}>
        <div>Step 1</div>
        <div>bra bra bra</div>
      </div>
    );
  }

  onClick() {
    //this.props.store.dispatch(showEditor("StepEditor", this.props.index));
  }
}