import React from 'react'
import {showEditor} from '../../actions/editorActions'

export default class Feature extends React.Component {
  render() {
    return (
        <div className="col-xs-12 col-sm-4" onClick={this.onClick.bind(this)}>
          <div>
            <h2 className="text-xs-center text-sm-center">{this.props.data.get("feature")}</h2>
          </div>
          <div>
            <i className={"fa fa-" + this.props.data.get("icon") + " fa-5x text-xs-center"}></i>
          </div>
          <div>
            <p className="text-xs-center  text-sm-center">{this.props.data.get("description")}</p>
          </div>
        </div>
      )
  }

  onClick() {
    //this.props.store.dispatch(showEditor("FeatureEditor", this.props.index));
  }
}
