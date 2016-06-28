export const ADD_CSS   = 'ADD_CSS';
export const CLEAR_CSS = 'CLEAR_CSS';

export function addCss( url ){
  return{ type: ADD_CSS, url: url };
}

export function clearCss( ){
  return{ type: CLEAR_CSS };
}