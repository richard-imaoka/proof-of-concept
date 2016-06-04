import React from 'react'
import FeatureListEditor  from './FeatureListEditor'
import FeatureEditor      from './FeatureListEditor'
import SocialEditor       from './SocialEditor'
import TitleEditor        from './TitleEditor'

export default function EditorFactory(contentType, props, children){

  switch(contentType) {
    case FeatureListEditor.name :
      return React.createElement(FeatureListEditor, props, children);
    case FeatureEditor.name :
      return React.createElement(FeatureEditor, props, children);
    case SocialEditor.name :
      return React.createElement(SocialEditor, props, children);
    case TitleEditor.name :
      return React.createElement(TitleEditor, props, children);
    default:
      return <div>{"No Such Editor = " + contentType}</div>
  }

}