import {Map} from 'immutable'

export default function imageBackgroundContentData(
  title="The greatest project ever",
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
){
  return Map( {
    type :       "Title",
    title:       title,
    description: description
  } );
}