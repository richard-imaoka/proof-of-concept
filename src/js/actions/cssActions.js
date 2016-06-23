export const SET_CSS = 'SET_CSS';

export function setCss( url ){
  return{ type: SET_CSS, url: url };
}
