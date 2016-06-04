import React from 'react'
import Blank        from './Blank'
import Deploy       from './Deploy'
import FeatureList  from './FeatureList'
import Social       from './Social'
import Title        from './Title'

export default function Content(props){

  switch(props.contentType) {
    case Blank.name :
      return React.createElement(Blank, props);
    case Deploy.name :
      return React.createElement(Deploy, props);
    case FeatureList.name :
      return React.createElement(FeatureList, props);
    case Social.name :
      return React.createElement(Social, props);
    case Title.name :
      return React.createElement(Title, props);
    default:
      return <div>{"No Such Component = " + props.contentType}</div>
  }

}