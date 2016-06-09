import {Map} from 'immutable'

export default function titleData( title="", description="" ){
  return Map( {
    type :       "Title",
    title:       title,
    description: description
  } );
}