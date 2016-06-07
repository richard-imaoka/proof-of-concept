import React from 'react'
import {showEditor} from '../../actions/editorActions'
import titleData    from '../../data/titleData'

export default class Title extends React.Component {
  render() {
    return (
      <section onClick={this.onClick.bind(this)}>
        <div>Title: {this.props.data.get("title")}</div>
        <div>Description: {this.props.data.get("description")}</div>
      </section>
    );
  }
  
  onClick() {
    this.props.store.dispatch(showEditor(this.props.index, "TitleEditor", titleData(this.props.data.get("title"), this.props.data.get("description"))));
  }
}