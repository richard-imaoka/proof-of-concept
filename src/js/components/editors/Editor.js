import React from 'react'
import IconContentEditor      from './IconContentEditor'
import FeatureListEditor  from './FeatureListEditor'
import HowToUseEditor     from './HowToUseEditor'
import PictureEditor      from './PictureEditor'
import SocialEditor       from './SocialEditor'
import StepEditor         from './StepEditor'
import ImageBackgroundContentEditor from './ImageBackgroundContentEditor'
import WorkflowEditor     from './WorkflowEditor'
import SelectorEditor     from './SelectorEditor'

export default class Editor extends React.Component {
  render() {
    switch(this.props.editorType) {
      case undefined :
        return <div>Closed</div>
      case "IconContent" :
        return React.createElement(IconContentEditor, this.props);
      case "FeatureList" :
        return React.createElement(FeatureListEditor, this.props);
      case "HowToUse" :
        return React.createElement(HowToUseEditor, this.props);
      case "Picture" :
        return React.createElement(PictureEditor, this.props);
      case "Social" :
        return React.createElement(SocialEditor, this.props);
      case "Step" :
        return React.createElement(StepEditor, this.props);
      case "ImageBackgroundContent" :
        return React.createElement(ImageBackgroundContentEditor, this.props);
      case "Workflow" :
        return React.createElement(WorkflowEditor, this.props);
      case "Selector" :
        return React.createElement(SelectorEditor, this.props);
      default:
        return <div>{"No Such Editor = " + this.props.editorType}</div>
    }
  }
}