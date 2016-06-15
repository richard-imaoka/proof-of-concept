import React from 'react'
import ProjectEntry from './ProjectEntry.js'

export default class FrontContainer extends React.Component {
  render() {
    return <ProjectEntry store={this.props.store}/>
  }
}