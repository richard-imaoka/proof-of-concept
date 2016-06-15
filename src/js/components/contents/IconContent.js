import React from 'react'
import {showEditor} from '../../actions/editorActions'
import iconData from '../../data/iconData'

export default class IconContent extends React.Component {
  render() {
    return (
      <div className="container" onClick={this.onClick.bind(this)}>
        <div>
          <h2 className="text-xs-center text-sm-center">{this.props.data.get("feature")}</h2>
        </div>
        <div className="text-xs-center text-sm-center">
          <i className={"fa fa-" + this.props.data.get("icon") + " fa-5x"}></i>
        </div>
        <div>
          <p className="text-xs-center  text-sm-center">{this.props.data.get("description")}</p>
        </div>
      </div>
    )
  }

  contentData() {
    return iconData( this.props.data.get("feature"), this.props.data.get("description"), this.props.data.get("icon"), this.props.subIndex );
  }

  onClick() {
    this.props.store.dispatch( showEditor( this.props.index, this.contentData() ) );
  }
}
