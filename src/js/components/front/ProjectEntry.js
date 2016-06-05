import React from 'react'
import { gotoLandingPageMode } from '../../actions/modeActions'
import { appendContent }       from '../../actions/contentActions'

export default class ProjectEntry extends React.Component {
  componentWillMount(){
    this.setState({title: ""});
  }

  render() {
    return (
      <div>
        <div>Enter your project name</div>
        <input  value={this.state.title} onChange={this.handleChange.bind(this)}/>
        <button onClick={this.onClick.bind(this)}>Create Landing Page</button>
        <div>Speak out your brilliant concept on a landing page!</div>
      </div>
    );
  }

  handleChange (event) {
    this.setState({title: event.target.value});
  }

  onClick() {
    this.props.store.dispatch(gotoLandingPageMode());
    this.props.store.dispatch(appendContent("Title", {title: this.state.title} ));
  }
}