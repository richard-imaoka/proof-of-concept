import React from 'react'
import ReactDOM from 'react-dom'
import {showEditor} from '../../actions/editorActions'
import imageData from '../../data/imageData'

export default class ImageContent extends React.Component {
  render() {
    return (
      <section className="image-content-background" onClick={this.onClick.bind(this)}>
        <div className="container image-content">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div ref="parent"
                   className="canvas-parent"
                   data-canvas-comment="a canvas element will be inserted by JavaScript after page load"
                   data-canvas-exif-orientation={this.props.data.get("orientation")}
                   data-canvas-src={this.props.data.get("src")}
                   data-canvas-classes="img-circle"
              />
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

  shouldComponentUpdate(nextProps){
    return this.props.data !== nextProps.data;
  }

  componentDidMount(){
    let parent = ReactDOM.findDOMNode(this.refs.parent);
    injectCanvas(parent);
  }

  componentDidUpdate(){
    let parent = ReactDOM.findDOMNode(this.refs.parent);
    parent.removeChild(parent.firstChild);
    injectCanvas(parent);
  }

  contentData() {
    return imageData(this.props.data.get("title"), this.props.data.get("description"), this.props.data.get("src") );
  }

  onClick() {
    this.props.store.dispatch( showEditor( this.props.index, this.contentData() ) );
  }
}