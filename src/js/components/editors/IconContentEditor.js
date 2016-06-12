import React from 'react'
import {updateContent} from '../../actions/contentActions'
import {closeEditor}   from '../../actions/editorActions'
import iconData        from '../../data/iconData'

export default class IconContentEditor extends React.Component {
  render() {
    return (
      <div>
        IconContentEdtior
        <button onClick={this.onClick.bind(this)}>done</button>
      </div>
    );
  }

  onClick() {
    this.props.store.dispatch(updateContent(this.props.index, "IconContent", iconData()));
    this.props.store.dispatch(closeEditor());
  }
}