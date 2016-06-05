import React from 'react'

export default class Feature extends React.Component {
  render() {
    return <div>Feature</div>;
  }

  onClick() {
    this.props.store.dispatch(showEditor("FeatureEditor", this.props.index));
  }
}