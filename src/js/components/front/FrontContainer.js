import React from 'react'
import ProjectEntry from './ProjectEntry.js'
import HowToUse     from '../contents/HowToUse.js'
import Workflow     from '../contents/Workflow.js'

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