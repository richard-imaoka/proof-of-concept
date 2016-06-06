import React   from 'react'
import Feature from './Feature'
import {showEditor} from '../../actions/editorActions'

export default class FeatureList extends React.Component {
  render() {
    const a = [1, 2, 3];
    let   i = 0;
    return (
      <div onClick={this.onClick.bind(this)}>
        { a.map( x => <Feature key={i++} store={this.props.store} data={this.props.data}/>) }
      </div>
    );
  }

  onClick() {
    this.props.store.dispatch(showEditor(this.props.index, "FeatureListEditor"));
  }
}