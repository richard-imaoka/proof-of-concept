import {Map} from 'immutable'

export default function prettyString(jsonObj){
  if(Map.isMap(jsonObj))
    return JSON.stringify(jsonObj.toJS(), null, " " );
  else
    return JSON.stringify(jsonObj, null, " " );
}