import React from 'react'
import {appendContent}  from '../../actions/contentActions'
import {closeEditor}    from '../../actions/editorActions'
import featureListData  from '../../data/featureListData'
import howToUseData     from '../../data/howToUseData'
import pictureData      from '../../data/pictureData'
import socialData       from '../../data/socialData'
import imageBackgroundContentData from '../../data/imageBackgroundContentData'
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
          <li onClick={this.onClickWorkflow.bind(this)}>Workflow</li>
        </ul>
      </div>
    );
  }

  onClickFeatureList(event) {
    this.props.store.dispatch(appendContent("FeatureList", featureListData()));
    this.props.store.dispatch(closeEditor());
  }
  onClickHowToUse(event) {
    this.props.store.dispatch(appendContent("HowToUse", howToUseData()));
    this.props.store.dispatch(closeEditor());
  }
  onClickPicture(event) {
    this.props.store.dispatch(appendContent("Picture", pictureData()));
    this.props.store.dispatch(closeEditor());
  }
  onClickSocial(event) {
    this.props.store.dispatch(appendContent("Social", socialData()));
    this.props.store.dispatch(closeEditor());
  }
  onClickImageBackgroundContent(event) {
    this.props.store.dispatch(appendContent("ImageBackgroundContent", imageBackgroundContentData()));
    this.props.store.dispatch(closeEditor());
  }
  onClickWorkflow(event) {
    this.props.store.dispatch(appendContent("Workflow", workflowData()));
    this.props.store.dispatch(closeEditor());
  }
}