import React from 'react'
import {showEditor} from '../../actions/editorActions'

export default class Content extends React.Component{
  render() {    
    const type = this.props.data.get("type");
    
    if(type === undefined)
      return <div>{"No Such Component = " + type}</div>;
    else
      return React.createElement(type, this.props);
  }

  onClick() {
    this.props.store.dispatch( showEditor( this.props.index, this.contentData() ) );
  }
}