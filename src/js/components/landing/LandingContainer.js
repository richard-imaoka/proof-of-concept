import React from 'react'
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
            c => <Content key={i} index={i++} contentType={c.get("contentType")} store={this.props.store} data={c.get("data")} />
          )
        }
        <AddMore store={this.props.store} index={contents.size}/>
        <Upload  store={this.props.store} />
        <Editor  store={this.props.store} index={editor.get("index")} editorType={editor.get("editorType")} data={editor.get("data")}/>
      </main>
    );
  }
}