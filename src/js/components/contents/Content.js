import React from 'react'
import Deploy       from './Deploy'
import Feature      from './Feature'
import FeatureList  from './FeatureList'
import HowToUse     from './HowToUse'
import Social       from './Social'
import Step         from './Step'
import Title        from './Title'
import Workflow     from './Workflow'

export default class Content extends React.Component{
  render() {
    switch(this.props.contentType) {
      case Deploy.name :
        return React.createElement(Deploy, this.props);
      case Feature.name :
        return React.createElement(Feature, this.props);
      case FeatureList.name :
        return React.createElement(FeatureList, this.props);
      case HowToUse.name :
        return React.createElement(HowToUse, this.props);
      case Social.name :
        return React.createElement(Social, this.props);
      case Step.name :
        return React.createElement(Step, this.props);
      case Title.name :
        return React.createElement(Title, this.props);
      case Workflow.name :
        return React.createElement(Workflow, this.props);
      default:
        return <div>{"No Such Component = " + this.props.contentType}</div>
    }
  }

}