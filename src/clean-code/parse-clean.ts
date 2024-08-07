import {vpxInfoFactory} from "./vpx-info-factory";

export const parseClean = (codecString: string)=>{
  if(codecString.startsWith('vp')){
    return vpxInfoFactory(codecString);
  }
  throw new Error('Unknown codec');
}