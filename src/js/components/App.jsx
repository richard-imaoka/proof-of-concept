import React from 'react'
import { TOP_PAGE_MODE, LANDING_PAGE_MODE } from "../actions/modeActions"
import TopPage     from './TopPage.jsx'
import LandingPage from './LandingPage.jsx'

export default class Action extends React.Component {
  render() {
    const mode = this.props.store.getState().get("mode");
    if( mode === TOP_PAGE_MODE )
      return <TopPage />
    else if(mode === LANDING_PAGE_MODE)
      return <LandingPage />
    else
      return <div>{ "no such mode = " + mode }</div>
  }
}