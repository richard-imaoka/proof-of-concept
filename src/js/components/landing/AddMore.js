import React from 'react'
import { showEditor } from '../../actions/editorActions'
import selectorData   from '../../data/selectorData'

export default class AddMore extends React.Component {
  render() {
    return (
      <div className="addmore-background">
        <div className="container" onClick={this.handleAdd.bind(this)}>
          <div className="text-xs-center text-sm-center">
            <i className="fa fa-plus fa-5x" aria-hidden="true"></i>
          </div>
          <div className="text-xs-center text-sm-center">
            Add a Content
          </div>
        </div>
      </div>
    );
  }

  handleAdd() {
    this.props.store.dispatch(showEditor(this.props.index, selectorData()));
  }
}
