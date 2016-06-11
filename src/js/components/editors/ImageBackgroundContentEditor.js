import React from 'react'
import {updateContent} from '../../actions/contentActions'
import {closeEditor}   from '../../actions/editorActions'
import imageBackgroundContentData from '../../data/imageBackgroundContentData'

export default class ImageBackgroundContentEditor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title:       this.props.data.get("title"),
      description: this.props.data.get("description")
    };
  }

  render() {
    return (
      <div>
        ImageBackgroundContentEditor
        <input type="text" value={this.state.title}       onChange={this.onChangeTitle.bind(this)} />
        <input type="text" value={this.state.description} onChange={this.onChangeDescription.bind(this)} />
        <button onClick={this.onClick.bind(this)}>done</button>
      </div>
    );
  }

  onChangeTitle(event) {
    this.setState({title: event.target.value});
  }

  onChangeDescription(event) {
    this.setState({description: event.target.value});
  }

  onClick() {
    this.props.store.dispatch(updateContent(this.props.index, "ImageBackgroundContent", imageBackgroundContentData(this.state.title, this.state.description)));
    this.props.store.dispatch(closeEditor());
  }
}