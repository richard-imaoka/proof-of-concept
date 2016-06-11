import React from 'react'
import IconContentEditor  from './IconContentEditor'
import FeatureListEditor  from './FeatureListEditor'
import HowToUseEditor     from './HowToUseEditor'
import PictureEditor      from './ImageContentEditor'
import SocialEditor       from './SocialEditor'
import StepEditor         from './StepEditor'
import ImageBackgroundContentEditor from './ImageBackgroundContentEditor'
import ImageContentEditor from './ImageContentEditor'
import WorkflowEditor     from './WorkflowEditor'
import SelectorEditor     from './SelectorEditor'
import {closeEditor, CLOSE_EDITOR, SHOW_EDITOR} from '../../actions/editorActions'

export default class Editor extends React.Component {
  contentEditor() {
    switch(this.props.editorType) {
      case undefined :
        return <div>Closed</div>
      case "IconContent" :
        return React.createElement(IconContentEditor, this.props);
      case "FeatureList" :
        return React.createElement(FeatureListEditor, this.props);
      case "HowToUse" :
        return React.createElement(HowToUseEditor, this.props);
      case "ImageBackgroundContent" :
        return React.createElement(ImageBackgroundContentEditor, this.props);
      case "ImageContent" :
        return React.createElement(ImageContentEditor, this.props);
      case "Picture" :
        return React.createElement(PictureEditor, this.props);
      case "Social" :
        return React.createElement(SocialEditor, this.props);
      case "Step" :
        return React.createElement(StepEditor, this.props);
      case "Workflow" :
        return React.createElement(WorkflowEditor, this.props);
      case "Selector" :
        return React.createElement(SelectorEditor, this.props);
      default:
        return <div>{"No Such Editor = " + this.props.editorType}</div>
    }
  }

  render() {
    console.log("amoas ", this.animation());
    return (
      <div className={"editor" + this.animation()} >
        { this.contentEditor() }
        <button onClick={this.handleCancel.bind(this)}>Cancel</button>
        <button onClick={this.handleDone.bind(this)}>Done</button>
      </div>
    )
  }

  animation(){
    if(this.props.actionType===SHOW_EDITOR)
      return " animated animated-fastest slideInUp";
    else if(this.props.actionType==CLOSE_EDITOR)
      return " animated animated-fastest slideOutDown";
    else
      return " none"
  }
  
  handleCancel() {
    this.props.store.dispatch(closeEditor());
  }

  handleDone() {
    this.props.store.dispatch(updateContent(this.props.index, featureListData()));
    this.props.store.dispatch(closeEditor());
  }

}