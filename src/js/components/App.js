import React from 'react'
import { TOP_PAGE_MODE, LANDING_PAGE_MODE } from "../actions/modeActions"
import FrontContainer   from './front/FrontContainer.js'
import LandingContainer from './landing/LandingContainer.js'

export default class App extends React.Component {
  render() {
    const mode = this.props.store.getState().get("mode");
    if( mode === TOP_PAGE_MODE )
      return <FrontContainer   store={this.props.store} contents={this.props.store.getState().get("front")} />
    else if(mode === LANDING_PAGE_MODE)
      return <LandingContainer store={this.props.store} contents={this.props.store.getState().get("landing")} />
    else
      return <div>{ "no such mode = " + mode }</div>
  }
}