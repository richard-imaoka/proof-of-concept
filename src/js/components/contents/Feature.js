import React from 'react'
import {showEditor} from '../../actions/editorActions'

export default class Feature extends React.Component {
  render() {
    return <div onClick={this.onClick.bind(this)}>Feature</div>;
  }
  
  onClick() {
    //this.props.store.dispatch(showEditor("FeatureEditor", this.props.index));
  }
}
