import {
  ColourPrimaries, MatrixCoefficients,
  TransferCharacteristics, VideoFullRangeFlag,
  VpxBitDepth,
  VpxChromaSubsampling,
  VpxLevel,
  VpxProfile
} from "../common/enums";

export interface DirtyCodecInfo {
  codecName: string,
  profile: VpxProfile,
  level: VpxLevel,
  bitDepth: VpxBitDepth,
  chromaSubsampling: VpxChromaSubsampling,
  colourPrimaries: ColourPrimaries,
  transferCharacteristics: TransferCharacteristics,
  matrixCoefficients: MatrixCoefficients,
  videoFullRangeFlag: VideoFullRangeFlag
}