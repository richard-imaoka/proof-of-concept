export const SHOW_CONTENT_EDITOR  = 'SHOW_CONTENT_EDITOR';
export const CLOSE_CONTENT_EDITOR = 'CLOSE_CONTENT_EDITOR';

export function showContentEditor( editorType, data ){
  return{ type: SHOW_CONTENT_EDITOR, editorType: editorType, data: data };
}

export function closeCpntentEditor(){
  return{ type: CLOSE_CONTENT_EDITOR };
}