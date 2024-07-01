import {VpxCodec} from "../common/enums";
import {Vp9Info} from "./vp9-info";

export const vpxInfoFactory = (codecString: string) => {
  if (codecString.startsWith(VpxCodec.VP9) || codecString === 'vp9') {
    return Vp9Info.fromString(codecString);
  }
  throw new Error('Unknown codec');
}
