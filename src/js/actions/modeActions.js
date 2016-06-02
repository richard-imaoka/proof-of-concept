export const TOP_PAGE_MODE     = 'TOP_PAGE_MODE';
export const LANDING_PAGE_MODE = 'LANDING_PAGE_MODE';

export function gotoTopPageMode(){
  return{ type: TOP_PAGE_MODE };
}

export function gotoLandingPageMode(){
  return{ type: LANDING_PAGE_MODE };
}