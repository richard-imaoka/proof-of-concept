import React from 'react'
import NoneContent  from './NoneContent'
import Swipeable    from 'react-swipeable'
import {removeContent} from '../../actions/contentActions'

export default class Content extends React.Component{
  render() {    
    const content       = this.props.data.get("type");
    const ContentViewer = content === undefined ? NoneContent : content;

    return (
      <Swipeable onSwipedLeft={this.handleLeftSwipe.bind(this)}>
        <ContentViewer index={this.props.index} store={this.props.store} data={this.props.data} />
      </Swipeable>
    )
  }

  handleLeftSwipe() {
    this.props.store.dispatch(removeContent(this.props.index));
  }
}