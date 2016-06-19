import React   from 'react'
import {List}  from 'immutable'
import AddMore from './AddMore'
import Upload  from './Upload'
import Editor  from '../editors/Editor'
import Content from '../contents/Content'

export default class LandingPage extends React.Component {
  render() {
    const contents = this.props.landing.get("contents");
    let i=0;
    return (
      <main>
        {
          contents.map(
            c => <Content key={i} index={i++} store={this.props.store} data={c} />
          )
        }
      </main>
    );
  }
}