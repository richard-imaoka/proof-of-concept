import React from 'react'
import {appendContent}  from '../../actions/contentActions'
import {closeEditor}    from '../../actions/editorActions'
import pictureData      from '../../data/pictureData'
import socialData       from '../../data/socialData'
import imageBackgroundData from '../../data/imageBackgrounData'
import imageData        from  '../../data/imageData'
import iconData         from  '../../data/iconData'


export default class SelectorEditor extends React.Component {
  render() {
    return (
      <div>
        <div></div>
        <ul>
          <li onClick={this.onIconContent.bind(this)}>IconContent</li>
          <li onClick={this.onClickImageBackgroundContent.bind(this)}>ImageBackgroundContent</li>
          <li onClick={this.onClickImageContent.bind(this)}>ImageContent</li>
          <li onClick={this.onClickPicture.bind(this)}>Picture</li>
          <li onClick={this.onClickSocial.bind(this)}>Social</li>
        </ul>
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
  onClickPicture(event) {
    this.props.store.dispatch(appendContent(pictureData()));
    this.props.store.dispatch(closeEditor());
  }
  onClickSocial(event) {
    this.props.store.dispatch(appendContent(socialData()));
    this.props.store.dispatch(closeEditor());
  }
}