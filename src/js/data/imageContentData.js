import {Map} from 'immutable'

export default function imageContentData(
  title="The greatest project ever",
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
){
  return Map( {
    type :       "ImageContent",
    title:       title,
    description: description
  } );
}