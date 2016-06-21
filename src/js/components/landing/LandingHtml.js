import React   from 'react'
import LandingPage from './LandingPage'

export default class LandingHtml extends React.Component {
  render() {
    return (
      <LandingPage store={this.props.store} landing={this.props.store.getState().get("landing")} />
    );
  }
}