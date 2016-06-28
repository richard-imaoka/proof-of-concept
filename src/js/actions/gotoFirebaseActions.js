export const SHOW_URL  = 'SHOW_URL';
export const CLEAR_URL = 'CLEAR_URL';

export function showURL( url ){
  return{ type: SHOW_URL, url: url };
}

export function clearURL(){
  return{ type: CLEAR_URL };
}