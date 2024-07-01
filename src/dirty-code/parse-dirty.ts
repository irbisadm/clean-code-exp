import {DirtyCodecInfo} from "./dirty-codec-info";
import {
  ColourPrimaries,
  MatrixCoefficients,
  TransferCharacteristics, VideoFullRangeFlag,
  VpxBitDepth,
  VpxChromaSubsampling,
  VpxLevel,
  VpxProfile
} from "../common/enums";

const profileLimitations: Record<VpxProfile, { bitDepth: VpxBitDepth[], chromaSubsampling: VpxChromaSubsampling[] }> = {
  [VpxProfile.PROFILE_0]: {
    bitDepth: [VpxBitDepth.BIT_DEPTH_8, VpxBitDepth.UNSET],
    chromaSubsampling: [VpxChromaSubsampling.CS_420_COLOCATED_0_0, VpxChromaSubsampling.CS_420_VERTICAL, VpxChromaSubsampling.UNSET]
  },
  [VpxProfile.PROFILE_1]: {
    bitDepth: [VpxBitDepth.BIT_DEPTH_8, VpxBitDepth.UNSET],
    chromaSubsampling: [VpxChromaSubsampling.CS_422, VpxChromaSubsampling.CS_444, VpxChromaSubsampling.UNSET]
  },
  [VpxProfile.PROFILE_2]: {
    bitDepth: [VpxBitDepth.BIT_DEPTH_10, VpxBitDepth.BIT_DEPTH_12, VpxBitDepth.UNSET],
    chromaSubsampling: [VpxChromaSubsampling.CS_420_COLOCATED_0_0, VpxChromaSubsampling.CS_420_VERTICAL, VpxChromaSubsampling.UNSET]
  },
  [VpxProfile.PROFILE_3]: {
    bitDepth: [VpxBitDepth.BIT_DEPTH_10, VpxBitDepth.BIT_DEPTH_12, VpxBitDepth.UNSET],
    chromaSubsampling: [VpxChromaSubsampling.CS_422, VpxChromaSubsampling.CS_444, VpxChromaSubsampling.UNSET]
  },
  [VpxProfile.UNSET]: {
    bitDepth: [VpxBitDepth.UNSET, VpxBitDepth.BIT_DEPTH_8, VpxBitDepth.BIT_DEPTH_12, VpxBitDepth.BIT_DEPTH_10],
    chromaSubsampling: [VpxChromaSubsampling.UNSET, VpxChromaSubsampling.CS_420_VERTICAL, VpxChromaSubsampling.CS_420_COLOCATED_0_0, VpxChromaSubsampling.CS_422, VpxChromaSubsampling.CS_444]
  }
}

const validateDirty = (codecInfo:DirtyCodecInfo): void => {
  const profileLimits = profileLimitations[codecInfo.profile];
  if (!profileLimits.bitDepth.includes(codecInfo.bitDepth)) {
    throw new Error(`Profile ${codecInfo.profile} is not compatible with bit depth ${codecInfo.bitDepth}`);
  }
  if (!profileLimits.chromaSubsampling.includes(codecInfo.chromaSubsampling)) {
    throw new Error(`Profile ${codecInfo.profile} is not compatible with chroma subsampling ${codecInfo.chromaSubsampling}`);
  }
}

const parseDirty = (codecString: string): DirtyCodecInfo => {
  const box = codecString.split('.');
  if((box.length >1 && box.length <4) || box.length > 9) throw new Error('Invalid codec string');

  const dirtyDescription = {
    codecName: box[0],
    profile: box[1] ? parseInt(box[1]) : VpxProfile.PROFILE_0,
    level: box[2] ? parseInt(box[2]).toString() as VpxLevel : VpxLevel.UNDEFINED,
    bitDepth: box[3] ? parseInt(box[3]) as VpxBitDepth : VpxBitDepth.BIT_DEPTH_8,
    chromaSubsampling : box[4] ? parseInt(box[4]) as VpxChromaSubsampling : VpxChromaSubsampling.CS_420_COLOCATED_0_0,
    colourPrimaries : box[5] ? parseInt(box[5]) as ColourPrimaries : ColourPrimaries.BT_709,
    transferCharacteristics : box[6] ? parseInt(box[6]) as TransferCharacteristics : TransferCharacteristics.BT_709,
    matrixCoefficients : box[7] ? parseInt(box[7]) as MatrixCoefficients : MatrixCoefficients.BT_709,
    videoFullRangeFlag : box[8] ?parseInt(box[8]) as VideoFullRangeFlag : VideoFullRangeFlag.LEGAL
  }
  validateDirty(dirtyDescription);
  return dirtyDescription;
}

export  {parseDirty}