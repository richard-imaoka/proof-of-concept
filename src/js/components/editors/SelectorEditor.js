import React from 'react'
import {appendContent}  from '../../actions/contentActions'
import {closeEditor}    from '../../actions/editorActions'
import titleData        from '../../data/titleData'

export default class SelectorEditor extends React.Component {
  render() {
    return (
      <div>
        <div></div>
        <ul>
          <li onClick={this.onClick.bind(this)}>FeatureList</li>
          <li onClick={this.onClick.bind(this)}>HowToUse</li>
          <li onClick={this.onClick.bind(this)}>Picture</li>
          <li onClick={this.onClick.bind(this)}>Social</li>
          <li onClick={this.onClick.bind(this)}>FeatureList</li>
          <li onClick={this.onClick.bind(this)}>Workflow</li>
          <li onClick={this.onClick.bind(this)}>Social</li>
          <li onClick={this.onClick.bind(this)}>Title</li>
        </ul>
      </div>
    );
  }

  onClick(event) {
    this.props.store.dispatch(appendContent(event.target.innerText, titleData()));
    this.props.store.dispatch(closeEditor());
  }
  
}