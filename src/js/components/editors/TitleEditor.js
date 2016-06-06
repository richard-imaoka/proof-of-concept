import React from 'react'
import {updateContent} from '../../actions/contentActions'
import {closeEditor}   from '../../actions/editorActions'
import titleData       from '../../data/titleData'

export default class TitleEditor extends React.Component {
  render() {
    return (
      <div>
        TitleEditor
        <button onClick={this.onClick.bind(this)}>done</button>
      </div>
    );
  }

  onClick() {
    this.props.store.dispatch(updateContent(this.props.index, "Title", titleData()));
    this.props.store.dispatch(closeEditor());
  }
}