import React from 'react'
import {updateContent} from '../../actions/contentActions'
import {closeEditor}   from '../../actions/editorActions'
import featureListData from '../../data/featureListData'

export default class FeatureListEditor extends React.Component {
  render() {
    return (
      <div>
        FeatureList
        <input />
        <button onClick={this.onClick.bind(this)}>done</button>
      </div>
    );
  }

  onClick() {
    this.props.store.dispatch(updateContent(this.props.index, "FeatureList", featureListData()));
    this.props.store.dispatch(closeEditor());
  }
}