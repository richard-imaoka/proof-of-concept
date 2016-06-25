export const SET_PROGRESS = 'SET_PROGRESS';
export const START_UPLOAD = 'START_UPLOAD';

export function startUpload( fileName ){
  return{ type: START_UPLOAD, fileName: fileName };
}

export function setProgress( fileName, progress ){
  return{ type: SET_PROGRESS, fileName: fileName,  progress: progress };
}