import React from 'react'
import {showEditor} from '../../actions/editorActions'
import imageContentData from '../../data/imageContentData'

export default class ImageContent extends React.Component {
  render() {
    return (
      <section className="image-content-background" onClick={this.onClick.bind(this)}>
        <div className="container image-content">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <img className="img-circle" src="img/chess-game-strategy-intelligence-52993.jpeg" alt="chess" />
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
  
  onClick() {
    this.props.store.dispatch(
      showEditor(
        this.props.index,
        imageContentData(this.props.data.get("title"), this.props.data.get("description"))
      )
    );
  }
}