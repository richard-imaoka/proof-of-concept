import React from 'react'
import AddMore from './AddMore'
import EditorFactory  from '../editors/EditorFactory'
import ContentFactory from '../contents/ContentFactory'

export default class LandingContainer extends React.Component {
  render() {
    const contents = this.props.landing.get("contents");
    const editor   = this.props.landing.get("editor");
    let i=0;
    return (
      <main>
        { contents.map( x => <ContentFactory key={i++} /> ) }
        <AddMore store={this.props.store} index={contents.size}/>
        <EditorFactory index={editor.get("index")} editorType={editor.get("editorType")} data={editor.get("data")}/>
      </main>
    );
  }
}