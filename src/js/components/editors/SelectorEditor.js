import React from 'react'
import {appendContent}  from '../../actions/contentActions'
import {closeEditor}    from '../../actions/editorActions'
import twitterShareData from '../../data/twitterShareData'
import imageBackgroundData from '../../data/imageBackgrounData'
import imageData        from  '../../data/imageData'
import iconData         from  '../../data/iconData'


export default class SelectorEditor extends React.Component {
  render() {
    return (
      <div className="selector">
        <h2 className="text-center">Add Content</h2>
        <button className="button expand-width" onClick={this.onClickImageBackgroundContent.bind(this)}>Background-Image Content</button>
        <button className="button expand-width" onClick={this.onClickImageContent.bind(this)}>Image Content</button>
        <button className="button expand-width" onClick={this.onClickTwitterShareContent.bind(this)}>Twitter Share Button</button>
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
  onClickTwitterShareContent(event) {
    this.props.store.dispatch(appendContent(twitterShareData()));
    this.props.store.dispatch(closeEditor());
  }
}