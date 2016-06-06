import React from 'react'
import {showEditor} from '../../actions/editorActions'
import titleData    from '../../data/titleData'

export default class Title extends React.Component {
  render() {
    return (
      <div onClick={this.onClick.bind(this)}>
        Title: {this.props.data.get("title")}
      </div>
    );
  }
  
  onClick() {
    this.props.store.dispatch(showEditor(this.props.index, "TitleEditor", titleData(this.props.data.get("title"))));
  }
}