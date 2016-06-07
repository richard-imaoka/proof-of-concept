import {Map} from 'immutable'

export default function titleData( title="", description="" ){
  return Map( {
    title:       title,
    description: description
  } );
}