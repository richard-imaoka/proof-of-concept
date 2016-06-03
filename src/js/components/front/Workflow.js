import React from 'react'
import Step from './Step'

export default class Workflow extends React.Component {
  render() {
    return (
      <div>
        <Step />
        <Step />
        <Step />
      </div>
    );
  }
}