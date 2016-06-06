import React from 'react'
import {updateContent} from '../../actions/contentActions'
import {closeEditor}   from '../../actions/editorActions'
import titleData       from '../../data/titleData'

export default class TitleEditor extends React.Component {
  constructor(props){
    super(props);
    this.state = {title: this.props.data.get("title")};
  }

  render() {
    return (
      <div>
        TitleEditor
        <input type="text" ref="input" value={this.state.title} onChange={this.onChange.bind(this)} />
        <button onClick={this.onClick.bind(this)}>done</button>
      </div>
    );
  }

  onChange(event) {
    this.setState({title: event.target.value});
  }

  onClick() {
    this.props.store.dispatch(updateContent(this.props.index, "Title", titleData(this.refs.input.value)));
    this.props.store.dispatch(closeEditor());
  }
}