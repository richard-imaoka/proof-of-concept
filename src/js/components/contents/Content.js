import React from 'react'
import {showEditor} from '../../actions/editorActions'
import NoneContent  from './NoneContent'

export default class Content extends React.Component{
  render() {    
    const content       = this.props.data.get("type");
    const ContentViewer = content === undefined ? NoneContent : content;

    return <ContentViewer ref="content" index={this.props.index} store={this.props.store} data={this.props.data} onClick={this.onClick.bind(this)} />
  }


  onClick() {
    const content = this.refs.content;

    if(content.contentData === undefined){
      window.alert( "ERROR! " + content.name + " does not implement contentData() method. Please do!" );
      return;
    }
    else{
      this.props.store.dispatch( showEditor( this.props.index, content.contentData() ) );
    }
  }

}