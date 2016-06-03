import React from 'react'

export default class FeatureList extends React.Component {
  render() {
    const a = [1, 2, 3];
    return a.map( x => <Feature />);
  }
}