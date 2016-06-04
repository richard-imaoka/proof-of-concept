import React from 'react'
import Blank        from './Blank'
import Deploy       from './Deploy'
import FeatureList  from './FeatureList'
import Feature      from './Feature'
import Social       from './Social'
import Title        from './Title'
import Workflow     from './Workflow'

export default class Content extends React.Component{

  render() {
    switch(this.props.contentType) {
      case Blank.name :
        return React.createElement(Blank, this.props);
      case Deploy.name :
        return React.createElement(Deploy, this.props);
      case FeatureList.name :
        return React.createElement(FeatureList, this.props);
      case Feature.name :
        return React.createElement(Feature, this.props);
      case Social.name :
        return React.createElement(Social, this.props);
      case Title.name :
        return React.createElement(Title, this.props);
      case Workflow.name :
        return React.createElement(Workflow, this.props);
      default:
        return <div>{"No Such Component = " + this.props.contentType}</div>
    }
  }

}