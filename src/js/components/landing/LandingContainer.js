import React   from 'react'
import {List}  from 'immutable'
import AddMore from './AddMore'
import Upload  from './Upload'
import Editor  from '../editors/Editor'
import Content from '../contents/Content'

export default class LandingContainer extends React.Component {
  render() {
    const contents = this.props.landing.get("contents");
    const editor   = this.props.landing.get("editor");
    let i=0;
    return (
      <main>
        {
          contents.map(
            c => <Content key={i} index={List([i++])} store={this.props.store} data={c} />
          )
        }
        <AddMore store={this.props.store} index={contents.size}/>
        <Editor
          store={this.props.store}
          index={editor.get("index")}
          actionType={editor.get("actionType")}
          data={editor.get("data")} />
      </main>
    );
  }
}