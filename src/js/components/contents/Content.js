import React from 'react'
import {showEditor} from '../../actions/editorActions'
import NoneContent  from './NoneContent'

export default class Content extends React.Component{
  render() {    
    const content       = this.props.data.get("type");
    const ContentViewer = content === undefined ? NoneContent : content;

    return <ContentViewer index={this.props.index} store={this.props.store} data={this.props.data} />
  }
}