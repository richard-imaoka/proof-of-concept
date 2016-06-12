import React from 'react'
import imageBackgroundContentData from '../../data/imageBackgroundContentData'
import {showEditor}  from '../../actions/editorActions'

export default class ImageBackgroundContent extends React.Component {
  render() {
    return (
      <section className="image-background-content-background" onClick={this.onClick.bind(this)}>
        <div className="container image-background-content">
          <div className="row"><h2>{this.props.data.get("title")}</h2></div>
          <div className="row"><h4>{this.props.data.get("description")}</h4></div>
        </div>
      </section>
    );
  }

  contentData() {
    return imageBackgroundContentData(this.props.data.get("title"), this.props.data.get("description"));
  }

  onClick() {
    this.props.store.dispatch( showEditor( this.props.index, this.contentData() ) );
  }
}