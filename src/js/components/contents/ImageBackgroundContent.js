import React from 'react'
import {showEditor} from '../../actions/editorActions'
import imageBackgroundData from '../../data/imageBackgrounData'

export default class ImageBackgroundContent extends React.Component {
  render() {
    return (
    <section
      className="image-background-content-background"
      style={{ backgroundImage : "url(" + this.props.data.get("src") + ")" }}
      onClick={this.onClick.bind(this)}
    >
        <div className="container image-background-content">
          <div className="row"><h2>{this.props.data.get("title")}</h2></div>
          <div className="row"><h4>{this.props.data.get("description")}</h4></div>
        </div>
      </section>
    );
  }

  contentData() {
    return imageBackgroundData(this.props.data.get("title"), this.props.data.get("description"));
  }

  onClick() {
    this.props.store.dispatch( showEditor( this.props.index, this.contentData() ) );
  }
}