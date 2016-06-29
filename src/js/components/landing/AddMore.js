import React from 'react'
import { showEditor } from '../../actions/editorActions'
import selectorData   from '../../data/selectorData'

export default class AddMore extends React.Component {
  render() {
    return (
      <div className="addmore-background">
        <div className="container">
          <div className="row">
            <button className="button-gold expand-width" onClick={this.onClick.bind(this)}>Add Content</button>
          </div>
        </div>
      </div>
    );
  }

  onClick() {
    this.props.store.dispatch(showEditor(this.props.index, selectorData()));
  }
}
