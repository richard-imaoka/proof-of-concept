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

  rotateBackground(){
    //EXIF orientation value
    //http://stackoverflow.com/questions/20600800/js-client-side-exif-orientation-rotate-and-mirror-jpeg-images
    switch(this.props.data.get("orientation")){
      case 1:
        return "rotate(0deg)";
      case 2:
        return "rotate(0deg) rotateY(180deg)";
      case 3:
        return "rotate(180deg)";
      case 4:
        return "rotate(180deg) rotateY(180deg)";
      case 5:
        return "rotate(90deg) rotateY(180deg)";
      case 6:
        return "rotate(90deg)";
      case 7:
        return "rotate(-90deg) rotateY(180deg)";
      case 8:
        return "rotate(-90deg)";
      default:
        return "rotate(0deg)";
    }
  }
}