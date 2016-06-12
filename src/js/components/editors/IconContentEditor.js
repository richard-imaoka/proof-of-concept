import React from 'react'
import {updateContent} from '../../actions/contentActions'
import {closeEditor}   from '../../actions/editorActions'
import iconData        from '../../data/iconData'

export default class IconContentEditor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      feature:     this.props.data.get("feature"),
      description: this.props.data.get("description"),
      icon:        this.props.data.get("icon"),
    };
  }

  render() {
    return (
      <div>
        IconContentEdtior
        <input type="text" value={this.state.feature}     onChange={this.onChangeFeature.bind(this)} />
        <input type="text" value={this.state.description} onChange={this.onChangeDescription.bind(this)} />
        <input type="text" value={this.state.icon}        onChange={this.onChangeIcon.bind(this)} />
      </div>
    );
  }

  contentData() {
    return iconData(this.state.feature, this.state.description, this.state.icon);
  }

  onChangeFeature(event) {
    this.setState({feature: event.target.value});
  }

  onChangeDescription(event) {
    this.setState({description: event.target.value});
  }

  onChangeIcon(event) {
    this.setState({icon: event.target.value});
  }


}