import {Map} from 'immutable'
import Step from '../components/contents/Step'
import StepEditor from '../components/editors/StepEditor'

export default function stepData(){
  return Map({
    type: Step,
    editor: StepEditor,
  });
}