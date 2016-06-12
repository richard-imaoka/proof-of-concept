import React   from 'react'
import IconContent from './IconContent'
import {showEditor} from '../../actions/editorActions'
import featureListData from '../../data/featureListData'

export default class FeatureList extends React.Component {
  render() {
    let i = 0;
    return (
      //Don't trigger onClick action for FeatureList, but trigger for each feature
      <section>
        <div className="container icon-content">
          <div className="row">
            {
              this.props.data.get("features").map(
                x => <IconContent key={i} index={this.props.index.push(i++)} store={this.props.store} data={x} />
              )
            }
          </div>
        </div>
      </section>
    );
  }
}