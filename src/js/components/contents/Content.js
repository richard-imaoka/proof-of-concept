import React           from 'react'
import ReactDOM        from 'react-dom'
import {Map}           from 'immutable'
import NoneContent     from './NoneContent'
import ReactSwiper     from './ReactSwiper'
import DeletedContent  from './DeletedContent';
import {removeContent, updateContent} from '../../actions/contentActions'

export default class Content extends React.Component{
  render() {    
    const content       = this.props.data.get("type");
    const ContentViewer = content === undefined ? NoneContent : content;

    if(content === DeletedContent)
      return <DeletedContent height={this.props.data.get("height")} />; //no swiper
    else
      return (
        <ReactSwiper ref="swiper" options={{onSlideNextEnd: this.callback.bind(this)}} >
          <ContentViewer index={this.props.index} store={this.props.store} data={this.props.data} />
          <div />
        </ReactSwiper>
      )
  }

  callback(){
    const height = ReactDOM.findDOMNode(this.refs.swiper).clientHeight;
    this.props.store.dispatch(updateContent(this.props.index, Map({type: DeletedContent})));
    this.props.store.dispatch(removeContent(this.props.index));
  }
}