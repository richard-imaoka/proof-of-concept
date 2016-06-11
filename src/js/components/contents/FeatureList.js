import React   from 'react'
import IconContent from './IconContent'
import {showEditor} from '../../actions/editorActions'
import featureListData from '../../data/featureListData'

export default class FeatureList extends React.Component {
  render() {
    const a = [1, 2, 3];
    let   i = 0;
    return (
      <section onClick={this.onClick.bind(this)}>
        <div className="container icon-content">
          <div className="row">
            { a.map( x => <IconContent key={i} store={this.props.store} data={this.props.data.get("features").get(i++)}/> ) }
          </div>
        </div>
      </section>
    );
  }

  onClick() {
    this.props.store.dispatch(showEditor(this.props.index, featureListData()));
  }
}