import React from 'react'
import {closeEditor, CLOSE_EDITOR, SHOW_EDITOR} from '../../actions/editorActions'
import {updateContent} from '../../actions/contentActions'
import NoneEditor     from './NoneEditor'
import EditorCloseBar from './EditorCloseBar'

export default class Editor extends React.Component {
  render() {
    const editor        = this.props.data.get("editor");
    const ContentEditor = editor === undefined ? NoneEditor : editor;

    return (
      <div className={"editor" + this.animation()} >
        <div className="container-float">
          <EditorCloseBar store={this.props.store} />
          <div className="editor-opaque">
            <ContentEditor ref="contentEditor" store={this.props.store} index={this.props.index} actionType={this.props.actionType} data={this.props.data} />
            <div className="row">
              <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.handleDone.bind(this)}>Done</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  animation(){
    if(this.props.actionType===SHOW_EDITOR)
      return " animated animated-fastest slideInUp";
    else if(this.props.actionType==CLOSE_EDITOR)
      return " animated animated-fastest slideOutDown";
    else
      return " none"
  }

  handleDone() {
    const contentEditor = this.refs.contentEditor;

    if(contentEditor.contentData === undefined){
      window.alert( "ERROR! " + contentEditor.name + " does not implement contentData() method. Please do!" );
      return;
    }
    else{
      this.props.store.dispatch(updateContent(this.props.index, contentEditor.contentData()));
      this.props.store.dispatch(closeEditor());
    }
  }

}