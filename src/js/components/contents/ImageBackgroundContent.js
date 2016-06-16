import React from 'react'
import Swipeable  from 'react-swipeable'
import {showEditor} from '../../actions/editorActions'
import imageBackgroundData from '../../data/imageBackgrounData'

export default class ImageBackgroundContent extends React.Component {
  render() {
    return (
      <Swipeable onSwipedLeft={this.handleLeftSwipe}>
        <section className="image-background-content-background" onClick={this.onClick.bind(this)}>
          <div className="container image-background-content">
            <div className="row"><h2>{this.props.data.get("title")}</h2></div>
            <div className="row"><h4>{this.props.data.get("description")}</h4></div>
          </div>
        </section>
      </Swipeable>
    );
  }

  contentData() {
    return imageBackgroundData(this.props.data.get("title"), this.props.data.get("description"));
  }

  onClick() {
    this.props.store.dispatch( showEditor( this.props.index, this.contentData() ) );
  }

  handleLeftSwipe() {
    window.alert('swiped left');
  }
}