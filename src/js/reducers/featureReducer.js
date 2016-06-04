import { Map } from 'immutable'

export default function feature(state = Map(), action = undefined){
  switch(action.type) {
    default:
      return state;
  }
}