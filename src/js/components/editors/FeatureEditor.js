import React from 'react'
import {updateContent} from '../../actions/contentActions'
import {closeEditor}   from '../../actions/editorActions'
import featureData     from '../../data/featureData'

export default class FeatureEditor extends React.Component {
  render() {
    return (
      <div>
        FeatureEdtior
        <button onClick={this.onClick.bind(this)}>done</button>
      </div>
    );
  }

  onClick() {
    this.props.store.dispatch(updateContent(this.props.index, "Feature", featureData()));
    this.props.store.dispatch(closeEditor());
  }
}