import React from 'react'
import AddMore from './AddMore'
import EditorFactory  from '../editors/EditorFactory'
import ContentFactory from '../contents/ContentFactory'
import { appendContent } from '../../actions/contentActions'

export default class LandingContainer extends React.Component {
  render() {
    const contents = this.props.landing.get("contents");
    const editor   = this.props.landing.get("editor");
    let i=0;
    return (
      <main>
        { contents.map(x => <ContentFactory key={i++} /> ) }
        <AddMore store={this.props.store} index={contents.size}/>
        <EditorFactory index={contents.size} type={editor.type} data={editor}/>
      </main>
    );
  }
}