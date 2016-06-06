import React from 'react'

export default class PictureEditor extends React.Component {
  render() {
    return <div>PictureEditor<input ref="input" type="file" /><button onClick={this.onClick.bind(this)}>show file name</button></div>;
  }

  onClick(){
    window.alert(this.refs.input.value);
  }

  componentWillReceiveProps(props){
    console.log(this.refs.input.value);
  }
}