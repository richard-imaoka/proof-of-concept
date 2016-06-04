import React from 'react'
import FeatureListEditor  from './FeatureListEditor'
import FeatureEditor      from './FeatureListEditor'
import SocialEditor       from './SocialEditor'
import TitleEditor        from './TitleEditor'
import SelectorEditor     from './SelectorEditor'

export default function EditorFactory(props){
  switch(props.editorType) {
    case FeatureListEditor.name :
      return React.createElement(FeatureListEditor, props);
    case FeatureEditor.name :
      return React.createElement(FeatureEditor, props);
    case SocialEditor.name :
      return React.createElement(SocialEditor, props);
    case TitleEditor.name :
      return React.createElement(TitleEditor, props);
    case SelectorEditor.name :
      return React.createElement(SelectorEditor, props);
    default:
      return <div>{"No Such Editor = " + props.editorType}</div>
  }
}