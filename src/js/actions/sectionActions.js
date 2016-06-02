export const ADD_SECTION    = 'ADD_SECTION';
export const INSERT_SECTION = 'INSERT_SECTION';
export const REMOVE_SECTION = 'REMOVE_SECTION';

export function addSection( ){
  return{ type: ADD_SECTION };
}

export function insertSection( ){
  return{ type: INSERT_SECTION };
}
export function removeSection( id ){
  return{ type: REMOVE_SECTION, id: id };
}