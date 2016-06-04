import React   from 'react'
import Feature from './Feature'

export default class FeatureList extends React.Component {
  render() {
    const a = [1, 2, 3];
    return <div>{ a.map( x => <Feature />) }</div>;
  }
}