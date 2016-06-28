export const SET_CSS = 'SET_CSS';
export const SET_JS  = 'SET_JS';

export function setCss( url ){
  return{ type: SET_CSS, url: url };
}

export function setJs( url ){
  return{ type: SET_JS, url: url };
}
