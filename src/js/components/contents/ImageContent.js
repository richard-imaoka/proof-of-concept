import React from 'react'
import {showEditor} from '../../actions/editorActions'
import imageContentData from '../../data/imageContentData'

export default class ImageContent extends React.Component {
  render() {
    return (
      <section className="image-content-background" onClick={this.props.onClick}>
        <div className="container image-content">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <img className="img-circle" src={this.props.data.get("src")} alt={this.props.data.get("title")} />
            </div>
            <div className="col-xs-12 col-md-6">
              <div><h2>{this.props.data.get("title")}</h2></div>
              <div><p>{this.props.data.get("description")}</p></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  contentData() {
    return imageContentData(this.props.data.get("title"), this.props.data.get("description"), this.props.data.get("src") );
  }
}