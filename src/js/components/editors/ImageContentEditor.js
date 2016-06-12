import React from 'react'
import imageContentData from '../../data/imageContentData'

export default class ImageContentEditor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title:       this.props.data.get("title"),
      description: this.props.data.get("description"),
      src:         this.props.data.get("src")
    };
  }

  render() {
    return (
      <div>
        ImageContentEditor
        <input type="text" value={this.state.title}       onChange={this.onChangeTitle.bind(this)} />
        <input type="text" value={this.state.description} onChange={this.onChangeDescription.bind(this)} />
        <input type="text" value={this.state.src}         onChange={this.onChangeSource.bind(this)} />
      </div>
    );
  }

  contentData() {
    return imageContentData(this.state.title, this.state.description, this.state.src);
  }

  onChangeTitle(event) {
    this.setState({title: event.target.value})
  }

  onChangeDescription(event) {
    this.setState({description: event.target.value});
  }

  onChangeSource(event) {
    this.setState({src: event.target.value});
  }
}