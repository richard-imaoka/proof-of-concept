import React from 'react'
import {closeEditor} from '../../actions/editorActions'

export default class Editor extends React.Component {
  render() {
    return (
      <div className="row editor-close-bar" onClick={this.props.handleClose}>
        <i className="fa fa-angle-double-down" ariaHidden="true"></i>
      </div>
    )
  }

  handleClose() {
    this.props.store.dispatch(closeEditor());
  }

}