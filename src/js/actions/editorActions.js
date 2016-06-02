export const SHOW_EDITOR  = 'SHOW_EDITOR';
export const CLOSE_EDITOR = 'CLOSE_EDITOR';

export function showEditor( contentType, data ){
  return{ type: SHOW_EDITOR, contentType: contentType, data: data };
}

export function closeEditor(){
  return{ type: CLOSE_EDITOR };
}