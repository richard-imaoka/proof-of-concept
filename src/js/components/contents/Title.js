import React from 'react'
import {showEditor} from '../../actions/editorActions'
import titleData    from '../../data/titleData'

export default class Title extends React.Component {
  render() {
    return (
      <section className="title-background" conClick={this.onClick.bind(this)}>
        <div className="container title-container">
          <div className="row"><h2>{this.props.data.get("title")}</h2></div>
          <div className="row"><h4>{this.props.data.get("description")}</h4></div>
        </div>
      </section>
    );
  }
  
  onClick() {
    this.props.store.dispatch(showEditor(this.props.index, "TitleEditor", titleData(this.props.data.get("title"), this.props.data.get("description"))));
  }
}