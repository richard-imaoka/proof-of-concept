import React   from 'react'
import AddMore from './AddMore'
import Upload  from './Upload'
import Editor  from '../editors/Editor'
import LandingPage from './LandingPage'

export default class LandingContainer extends React.Component {
  render() {
    const contents = this.props.landing.get("contents");
    const editor   = this.props.landing.get("editor");
    return (
      <div>
        <LandingPage store={this.props.store} landing={this.props.landing} />
        <AddMore store={this.props.store} index={contents.size}/>
        <Upload store={this.props.store} landing={this.props.landing} />
        <Editor
          store={this.props.store}
          index={editor.get("index")}
          actionType={editor.get("actionType")}
          data={editor.get("data")} />
      </div>
    );
  }
}