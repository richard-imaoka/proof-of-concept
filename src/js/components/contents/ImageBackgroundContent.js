import React from 'react'
import imageBackgroundContentData from '../../data/imageBackgroundContentData'

export default class ImageBackgroundContent extends React.Component {
  render() {
    return (
      <section className="image-background-content-background" onClick={this.props.onClick}>
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
}