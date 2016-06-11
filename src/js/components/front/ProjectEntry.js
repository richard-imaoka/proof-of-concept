import React from 'react'
import { gotoLandingPageMode } from '../../actions/modeActions'
import { appendContent }       from '../../actions/contentActions'
import imageBackgroundContentData from '../../data/imageBackgroundContentData'

export default class ProjectEntry extends React.Component {
  componentWillMount(){
    this.setState({title: "The Greatest Project Ever"});
  }

  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div><h1>Enter your project name</h1></div>
            <input  className="project-input" value={this.state.title} onChange={this.handleChange.bind(this)}/>
            <button className="btn btn-primary" onClick={this.onClick.bind(this)}>Create Landing Page</button>
            <div><h4>Speak out your brilliant concept on a landing page!</h4></div>
          </div>
        </div>
      </section>
    );
  }

  handleChange (event) {
    this.setState({title: event.target.value});
  }

  onClick() {
    this.props.store.dispatch(gotoLandingPageMode());
    this.props.store.dispatch(appendContent("ImageBackgroundContent", imageBackgroundContentData(this.state.title)));
  }
}