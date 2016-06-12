import React from 'react'
import {appendContent}  from '../../actions/contentActions'
import {closeEditor}    from '../../actions/editorActions'
import featureListData  from '../../data/featureListData'
import howToUseData     from '../../data/howToUseData'
import pictureData      from '../../data/pictureData'
import socialData       from '../../data/socialData'
import imageBackgroundContentData from '../../data/imageBackgroundContentData'
import imageContentData from '../../data/imageContentData'
import workflowData     from '../../data/workflowData'

export default class SelectorEditor extends React.Component {
  render() {
    return (
      <div>
        <div></div>
        <ul>
          <li onClick={this.onClickFeatureList.bind(this)}>FeatureList</li>
          <li onClick={this.onClickHowToUse.bind(this)}>HowToUse</li>
          <li onClick={this.onClickPicture.bind(this)}>Picture</li>
          <li onClick={this.onClickSocial.bind(this)}>Social</li>
          <li onClick={this.onClickImageBackgroundContent.bind(this)}>ImageBackgroundContent</li>
          <li onClick={this.onClickImageContent.bind(this)}>ImageContent</li>
          <li onClick={this.onClickWorkflow.bind(this)}>Workflow</li>
        </ul>
      </div>
    );
  }

  onClickFeatureList(event) {
    this.props.store.dispatch(appendContent(featureListData()));
    this.props.store.dispatch(closeEditor());
  }
  onClickHowToUse(event) {
    this.props.store.dispatch(appendContent(howToUseData()));
    this.props.store.dispatch(closeEditor());
  }
  onClickPicture(event) {
    this.props.store.dispatch(appendContent(pictureData()));
    this.props.store.dispatch(closeEditor());
  }
  onClickSocial(event) {
    this.props.store.dispatch(appendContent(socialData()));
    this.props.store.dispatch(closeEditor());
  }
  onClickImageBackgroundContent(event) {
    this.props.store.dispatch(appendContent(imageBackgroundContentData()));
    this.props.store.dispatch(closeEditor());
  }
  onClickImageContent(event) {
    this.props.store.dispatch(appendContent(imageContentData()));
    this.props.store.dispatch(closeEditor());
  }
  onClickWorkflow(event) {
    this.props.store.dispatch(appendContent(workflowData()));
    this.props.store.dispatch(closeEditor());
  }
}