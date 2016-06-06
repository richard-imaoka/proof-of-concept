import React from 'react'
import {showEditor} from '../../actions/editorActions'

export default class Title extends React.Component {
  render() {
    console.log(this.props);
    return <div onClick={this.onClick.bind(this)}>{this.props.data.get("title")}</div>;
  }
  
  onClick() {
    this.props.store.dispatch(showEditor("TitleEditor", this.props.index));
  }
}