export const APPEND_CONTENT = 'APPEND_CONTENT';
export const INSERT_CONTENT = 'INSERT_CONTENT';
export const REMOVE_CONTENT = 'REMOVE_CONTENT';

export function appendContent( contentType, data ){
  return{ type: APPEND_CONTENT, contentType : contentType, data: data };
}

export function insertContent( index, contentType, data ){
  return{ type: INSERT_CONTENT, index: index, contentType : contentType, data: data };
}

export function removeContent( index ){
  return{ type: REMOVE_CONTENT, index: index };
}