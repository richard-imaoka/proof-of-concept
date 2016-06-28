import React    from 'react'
import ReactDOM from 'react-dom'
import {showEditor} from '../../actions/editorActions'
import imageBackgroundData from '../../data/imageBackgrounData'

export default class ImageBackgroundContent extends React.Component {
  render() {
    return (
      <section className="background-container" onClick={this.onClick.bind(this)}>
        <div ref="parent"
             className="canvas-parent expand-100percent background"
             data-canvas-comment="a canvas element will be inserted by JavaScript after page load"
             data-canvas-exif-orientation={this.props.data.get("orientation")}
             data-canvas-src={this.props.data.get("src")}
        />
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
}