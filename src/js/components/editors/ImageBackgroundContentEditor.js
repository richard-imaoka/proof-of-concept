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
        <h3 className="editor-name">Image in Background</h3>
        <form>
          <div className="form-group">
            <label htmlFor="editor-input-title">title</label>
            <input id="editor-input-title" type="text" className="form-control" value={this.state.title}  onChange={this.onChangeTitle.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="editor-input-description">description</label>
            <input id="editor-input-description" type="text" className="form-control" value={this.state.description}  onChange={this.onChangeDescription.bind(this)} />
          </div>
        </form>
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