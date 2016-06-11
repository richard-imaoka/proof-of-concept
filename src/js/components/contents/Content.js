import React from 'react'
import Deploy       from './Deploy'
import IconContent  from './IconContent'
import FeatureList  from './FeatureList'
import HowToUse     from './HowToUse'
import Picture      from './Picture'
import Social       from './Social'
import Step         from './Step'
import ImageBackgroundContent from './ImageBackgroundContent'
import ImageContent from './ImageContent'
import Workflow     from './Workflow'

export default class Content extends React.Component{
  render() {
    switch(this.props.contentType) {
      case Deploy.name :
        return React.createElement(Deploy, this.props);
      case IconContent.name :
        return React.createElement(IconContent, this.props);
      case FeatureList.name :
        return React.createElement(FeatureList, this.props);
      case HowToUse.name :
        return React.createElement(HowToUse, this.props);
      case Picture.name :
        return React.createElement(Picture, this.props);
      case Social.name :
        return React.createElement(Social, this.props);
      case Step.name :
        return React.createElement(Step, this.props);
      case ImageBackgroundContent.name :
        return React.createElement(ImageBackgroundContent, this.props);
      case ImageContent.name :
        return React.createElement(ImageContent, this.props);
      case Workflow.name :
        return React.createElement(Workflow, this.props);
      default:
        return <div>{"No Such Component = " + this.props.contentType}</div>
    }
  }

}