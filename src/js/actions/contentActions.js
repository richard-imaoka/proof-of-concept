export const APPEND_CONTENT = 'APPEND_CONTENT';
export const INSERT_CONTENT = 'INSERT_CONTENT';
export const REMOVE_CONTENT = 'REMOVE_CONTENT';
export const UPDATE_CONTENT = 'UPDATE_CONTENT';

export function appendContent( data ){
  return{ type: APPEND_CONTENT, data: data };
}

export function insertContent( index, data ){
  return{ type: INSERT_CONTENT, index: index, data: data };
}

export function updateContent( index, data ){
  return{ type: UPDATE_CONTENT, index: index, data: data };
}

export function removeContent( index ){
  return{ type: REMOVE_CONTENT, index: index };
}