import {Map} from 'immutable'
import Workflow from '../components/contents/Workflow'
import WorkflowEditor from '../components/editors/WorkflowEditor'

export default function workflowData(){
  return Map({
    type: Workflow,
    editor: WorkflowEditor
  });
}