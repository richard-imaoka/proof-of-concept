import React from 'react'
import {updateContent} from '../../actions/contentActions'
import {closeEditor}   from '../../actions/editorActions'
import howToUseData    from '../../data/howToUseData'

export default class HowToUseEditor extends React.Component {
  render() {
    return (
      <div>
        HowToUse Editor
        <button onClick={this.onClick.bind(this)}>done</button>
      </div>
    );
  }

  onClick() {
    this.props.store.dispatch(updateContent(this.props.index, "HowToUse", howToUseData()));
    this.props.store.dispatch(closeEditor());
  }
}