import React from 'react'
import {getAvailableFileName} from '../../reducers/rootReducer'
import imageBackgroundData from '../../data/imageBackgrounData'

export default class ImageBackgroundContentEditor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title:       this.props.data.get("title"),
      description: this.props.data.get("description"),
      src:         this.props.data.get("src"),
      fileObj:     this.props.data.get("fileObj"),
      fileName:    this.props.data.get("fileName"),
      orientation: this.props.data.get("orientation")
    };
  }

  render() {
    return (
      <div>
        <h3 className="text-center">Background-Image Content</h3>
        <form>
          <input type="text" value={this.state.title}       className="input-text"     onChange={this.onChangeTitle.bind(this)} />
          <textarea          value={this.state.description} className="input-textarea" onChange={this.onChangeDescription.bind(this)} rows="8" />

          <label htmlFor={"file-upload"+this.props.index} className="button expand-width">Select Image</label>
          <input      id={"file-upload"+this.props.index} style={{display:"none"}} type="file" onChange={this.onChangeImage.bind(this)} />
        </form>
        <div className="expand-width">
          <img className="image-preview" src={this.state.src} />
        </div>
      </div>
    );
  }

  contentData() {
    return imageBackgroundData(this.state.title, this.state.description, this.state.src, this.state.fileObj, this.state.fileName, this.state.orientation );
  }

  onChangeTitle(event) {
    this.setState({title: event.target.value});
  }

  onChangeDescription(event) {
    this.setState({description: event.target.value});
  }

  onChangeImage(domEvent) {
    let fileObj = domEvent.target.files[0];

    const fileName = getAvailableFileName( this.props.store.getState(), fileObj.name );
    this.setState({fileName: fileName});

    //EXIF data will be removed to protect personal information, however, currently we didn't implement a way
    //to retain EXIF orientation only. So storing EXIF orientation in state here,
    //which is embedded in canvas data-canvas-orientation attribute later
    loadImage.parseMetaData( fileObj, data => {
        if (!data.imageHead) {
          return;
        }
        this.setState({orientation: data.exif.get('Orientation')});
      }
    );

    let reader = new FileReader();
    reader.onload = fileEvent => {
      const dataURL = fileEvent.target.result;
      this.setState({src: dataURL});
    };
    reader.readAsDataURL(fileObj);

    let reader2 = new FileReader();
    reader2.onload = fileEvent => {
      const arrayBuffer = fileEvent.target.result;
      const blob = this.removeExif(arrayBuffer);
      if(blob === undefined) //! JPEG
        this.setState({fileObj: fileObj});
      else
        this.setState({fileObj: blob});
    };
    reader2.readAsArrayBuffer(fileObj);

  }

  removeExif(arrayBuffer){
    var dv = new DataView(arrayBuffer);
    var offset = 0, recess = 0;
    var pieces = [];
    var i = 0;
    if (dv.getUint16(offset) == 0xffd8){ //0xffd8 is for JPEG
      offset += 2;
      var app1 = dv.getUint16(offset);
      offset += 2;
      while (offset < dv.byteLength){
        if (app1 == 0xffe1){

          pieces[i] = {recess:recess,offset:offset-2};
          recess = offset + dv.getUint16(offset);
          i++;
        }
        else if (app1 == 0xffda){
          break;
        }
        offset += dv.getUint16(offset);
        var app1 = dv.getUint16(offset);
        offset += 2;
      }
      if (pieces.length > 0){
        var newPieces = [];
        pieces.forEach(function(v){
          newPieces.push(arrayBuffer.slice(v.recess, v.offset));
        }, this);
        newPieces.push(arrayBuffer.slice(recess));
        var br = new Blob(newPieces, {type: 'image/jpeg'});
        return br;
      }
    }
    else
      return undefined;
  }
}