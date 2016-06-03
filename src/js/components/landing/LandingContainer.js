import React from 'react'
import Title   from './Title'
import AddMore from './AddMore'

export default class LandingContainer extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <AddMore />
      </div>
    );
  }
}