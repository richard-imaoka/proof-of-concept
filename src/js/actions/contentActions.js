export const APPEND_CONTENT = 'APPEND_CONTENT';
export const INSERT_CONTENT = 'INSERT_CONTENT';
export const REMOVE_CONTENT = 'REMOVE_CONTENT';

export function appendContent( ){
  return{ type: APPEND_CONTENT };
}

export function insertContent( index, data ){
  return{ type: INSERT_CONTENT, index: index, data: data };
}

export function removeContent( index ){
  return{ type: REMOVE_CONTENT, index: index };
}