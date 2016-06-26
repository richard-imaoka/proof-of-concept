import React from 'react'
import {appendContent}  from '../../actions/contentActions'
import {closeEditor}    from '../../actions/editorActions'
import socialData       from '../../data/socialData'
import imageBackgroundData from '../../data/imageBackgrounData'
import imageData        from  '../../data/imageData'
import iconData         from  '../../data/iconData'


export default class SelectorEditor extends React.Component {
  render() {
    return (
      <div className="selector">
        <h2 className="text-center">Add Content</h2>
        <button className="expand-width" onClick={this.onClickImageBackgroundContent.bind(this)}>Background-Image Content</button>
        <button className="expand-width" onClick={this.onClickImageContent.bind(this)}>Image Content</button>
      </div>
    );
  }

  onIconContent(event) {
    this.props.store.dispatch(appendContent(iconData()));
    this.props.store.dispatch(closeEditor());
  }
  onClickImageBackgroundContent(event) {
    this.props.store.dispatch(appendContent(imageBackgroundData()));
    this.props.store.dispatch(closeEditor());
  }
  onClickImageContent(event) {
    this.props.store.dispatch(appendContent(imageData()));
    this.props.store.dispatch(closeEditor());
  }
  onClickSocial(event) {
    this.props.store.dispatch(appendContent(socialData()));
    this.props.store.dispatch(closeEditor());
  }
}