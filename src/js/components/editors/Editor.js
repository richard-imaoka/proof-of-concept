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
    const editor = this.props.data.get("editor");
    return React.createElement(editor, this.props);
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