import React from 'react'
import ProjectEntry from './ProjectEntry.js'
import HowToUse     from './HowToUse.js'
import Workflow     from './Workflow.js'

export default class FrontContainer extends React.Component {
  render() {
    return (
      <div>
        <ProjectEntry />
        <Workflow />
        <HowToUse />
      </div>
    );
  }
}