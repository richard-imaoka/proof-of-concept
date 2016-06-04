import React from 'react'
import Blank        from './Blank'
import Deploy       from './Deploy'
import FeatureList  from './FeatureList'
import Social       from './Social'
import Title        from './Title'

export default function ContentFactory(contentType, props, children){

  switch(contentType) {
    case Blank.name :
      return React.createElement(Blank, props, children);
    case Deploy.name :
      return React.createElement(Deploy, props, children);
    case FeatureList.name :
      return React.createElement(FeatureList, props, children);
    case Social.name :
      return React.createElement(Social, props, children);
    case Title.name :
      return React.createElement(Title, props, children);
    default:
      return <div>{"No Sucn Component = " + contentType}</div>
  }

}