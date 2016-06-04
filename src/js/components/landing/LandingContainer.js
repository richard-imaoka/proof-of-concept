import React from 'react'
import AddMore from './AddMore'
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
            c => <Content key={i++} store={this.props.store} contentType={c.get("contentType")} data={c.get("data")} />
          )
        }
        <AddMore store={this.props.store} index={contents.size}/>
        <Editor  store={this.props.store} index={editor.get("index")} editorType={editor.get("editorType")} data={editor.get("data")}/>
      </main>
    );
  }
}