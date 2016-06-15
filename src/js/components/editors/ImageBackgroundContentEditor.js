import React from 'react'
import imageBackgroundData from '../../data/imageBackgrounData'

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
      </div>
    );
  }

  contentData() {
    return imageBackgroundData(this.state.title, this.state.description);
  }

  onChangeTitle(event) {
    this.setState({title: event.target.value});
  }

  onChangeDescription(event) {
    this.setState({description: event.target.value});
  }
}