import React from 'react'
import { showEditor } from '../../actions/editorActions'
import selectorData   from '../../data/selectorData'

export default class AddMore extends React.Component {
  render() {
    return (
      <div className="addmore-background">
        <div className="container addmore-container" onClick={this.onClick.bind(this)}>
            <div className="text-xs-center text-sm-center">
              <h2>Add Content</h2>
            </div>
        </div>
      </div>
    );
  }

  onClick() {
    this.props.store.dispatch(showEditor(this.props.index, selectorData()));
  }
}
