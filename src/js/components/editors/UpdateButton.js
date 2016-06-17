import React from 'react'
import {appendContent}  from '../../actions/contentActions'
import {closeEditor}    from '../../actions/editorActions'
import socialData       from '../../data/socialData'
import imageBackgroundData from '../../data/imageBackgrounData'
import imageData        from  '../../data/imageData'
import iconData         from  '../../data/iconData'


export default class UpdateButton extends React.Component {
  render() {
    if(!this.props.show)
      return <div />;
    else
      return (
        <div className="row">
          <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.props.onClick}>Done</button>
        </div>
      );
  }
}