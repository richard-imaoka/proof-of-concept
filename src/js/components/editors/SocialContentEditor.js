import React from 'react'
import {updateContent} from '../../actions/contentActions'
import {closeEditor}   from '../../actions/editorActions'
import socialData      from '../../data/socialData'

export default class SocialEditor extends React.Component {
  render() {
    return (
      <div>
        SocialEditor
        <button onClick={this.onClick.bind(this)}>done</button>
      </div>
    );
  }

  onClick() {
    this.props.store.dispatch(updateContent(this.props.index, "Social", socialData()));
    this.props.store.dispatch(closeEditor());
  }
}