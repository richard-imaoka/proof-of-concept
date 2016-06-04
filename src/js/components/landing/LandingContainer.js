import React from 'react'
import ContentFactory from './ContentFactory'
import AddMore from './AddMore'
import { appendContent } from '../../actions/contentActions'

export default class LandingContainer extends React.Component {
  render() {
    let i=0;
    return (
      <main>
        { this.props.contents.map(x => <ContentFactory key={i++} /> ) }
        <AddMore store={this.props.store} />
      </main>
    );
  }

  onClick() {
    this.props.store.dispatch(appendContent());
  }
}