import React from 'react'
import {updateContent} from '../../actions/contentActions'
import {closeEditor}   from '../../actions/editorActions'
import stepData        from '../../data/stepData'

export default class StepEditor extends React.Component {
  render() {
    return (
      <div>
        StepEditor
        <button onClick={this.onClick.bind(this)}>done</button>
      </div>
    );
  }

  onClick() {
    this.props.store.dispatch(updateContent(this.props.index, "Step", stepData()));
    this.props.store.dispatch(closeEditor());
  }
}