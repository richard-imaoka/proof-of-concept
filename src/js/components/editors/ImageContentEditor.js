import React from 'react'
import imageData from '../../data/imageData'

export default class ImageContentEditor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title:       this.props.data.get("title"),
      description: this.props.data.get("description"),
      src:         this.props.data.get("src"),
      fileObj:     this.props.data.get("fileObj")
    };
  }

  render() {
    return (
      <div>
        <h3 className="editor-name">Image</h3>
        <form>
          <div className="form-group">
            <label htmlFor="editor-input-title">title</label>
            <input id="editor-input-title" type="text" className="form-control" value={this.state.title}  onChange={this.onChangeTitle.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="editor-input-description">description</label>
            <input id="editor-input-description" type="text" className="form-control" value={this.state.description}  onChange={this.onChangeDescription.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="editor-input-description">select image</label>
            <input type="file" accept="image/*"  onChange={this.onChangeImage.bind(this)} />
          </div>
        </form>
      </div>
    );
  }

  contentData() {
    return imageData(this.state.title, this.state.description, this.state.src, this.state.fileObj );
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

  onChangeImage(domEvent) {
    //store.dispatch(LOAD_IMAGE)
    let fileObj  = domEvent.target.files[0];
    let reader = new FileReader();
    reader.onload = fileEvent => {
      let src = fileEvent.target.result;
      this.setState({src: src, fileObj: fileObj});
    }
    reader.readAsDataURL(fileObj);
  }
}