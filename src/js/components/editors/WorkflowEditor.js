import React from 'react'
import {updateContent} from '../../actions/contentActions'
import {closeEditor}   from '../../actions/editorActions'
import workflowData    from '../../data/workflowData'

export default class WorkflowEditor extends React.Component {
  render() {
    return (
      <div>
        Workflow Editor
        <button onClick={this.onClick.bind(this)}>done</button>
      </div>
    );
  }

  onClick() {
    this.props.store.dispatch(updateContent(this.props.index, "Workflow", workflowData()));
    this.props.store.dispatch(closeEditor());
  }
}