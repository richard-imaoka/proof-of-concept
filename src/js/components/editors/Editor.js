import React from 'react'
import FeatureListEditor  from './FeatureListEditor'
import FeatureEditor      from './FeatureListEditor'
import SocialEditor       from './SocialEditor'
import TitleEditor        from './TitleEditor'
import SelectorEditor     from './SelectorEditor'
import { SHOW_EDITOR, CLOSE_EDITOR } from "../../actions/editorActions"

export default class Editor extends React.Component {
  render() {
    switch(this.props.editorType) {
      case undefined :
        return <div>Closed</div>
      case FeatureListEditor.name :
        return React.createElement(FeatureListEditor, this.props);
      case FeatureEditor.name :
        return React.createElement(FeatureEditor, this.props);
      case SocialEditor.name :
        return React.createElement(SocialEditor, this.props);
      case TitleEditor.name :
        return React.createElement(TitleEditor, this.props);
      case SelectorEditor.name :
        return React.createElement(SelectorEditor, this.props);
      default:
        return <div>{"No Such Editor = " + this.props.editorType}</div>
    }
  }
}