export const ADD_JS   = 'ADD_JS';
export const CLEAR_JS = 'CLEAR_JS';

export function addJs( url ){
  return{ type: ADD_JS, url: url };
}

export function clearJs(){
  return{ type: CLEAR_JS };
}