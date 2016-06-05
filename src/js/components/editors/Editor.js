import React from 'react'
import FeatureEditor      from './FeatureEditor'
import FeatureListEditor  from './FeatureListEditor'
import HowToUseEditor     from './HowToUseEditor'
import SocialEditor       from './SocialEditor'
import StepEditor         from './StepEditor'
import TitleEditor        from './TitleEditor'
import WorkflowEditor     from './WorkflowEditor'
import SelectorEditor     from './SelectorEditor'

export default class Editor extends React.Component {
  render() {
    switch(this.props.editorType) {
      case undefined :
        return <div>Closed</div>
      case FeatureEditor.name :
        return React.createElement(FeatureEditor, this.props);
      case FeatureListEditor.name :
        return React.createElement(FeatureListEditor, this.props);
      case HowToUseEditor.name :
        return React.createElement(HowToUseEditor, this.props);
      case SocialEditor.name :
        return React.createElement(SocialEditor, this.props);
      case StepEditor.name :
        return React.createElement(StepEditor, this.props);
      case TitleEditor.name :
        return React.createElement(TitleEditor, this.props);
      case WorkflowEditor.name :
        return React.createElement(WorkflowEditor, this.props);
      case SelectorEditor.name :
        return React.createElement(SelectorEditor, this.props);
      default:
        return <div>{"No Such Editor = " + this.props.editorType}</div>
    }
  }
}