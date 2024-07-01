export enum VpxChromaSubsampling {
  UNSET = -1,
  CS_420_VERTICAL = 0,
  CS_420_COLOCATED_0_0 = 1,
  CS_422 = 2,
  CS_444 = 3,
}

export enum VpxBitDepth {
  UNSET = -1,
  BIT_DEPTH_8 = 8,
  BIT_DEPTH_10 = 10,
  BIT_DEPTH_12 = 12,
}

export enum VpxLevel {
  UNDEFINED = '0',
  LEVEL_1 = '10',
  LEVEL_1_1 = '11',
  LEVEL_2 = '20',
  LEVEL_2_1 = '21',
  LEVEL_3 = '30',
  LEVEL_3_1 = '31',
  LEVEL_4 = '40',
  LEVEL_4_1 = '41',
  LEVEL_5 = '50',
  LEVEL_5_1 = '51',
  LEVEL_5_2 = '52',
  LEVEL_6 = '60',
  LEVEL_6_1 = '61',
  LEVEL_6_2 = '62',
}

export enum VpxProfile {
  UNSET = -1,
  PROFILE_0,
  PROFILE_1,
  PROFILE_2,
  PROFILE_3,
}

export enum ColourPrimaries {
  BT_709 = 1,
  UNSPECIFIED = 2,
  BT_470M = 4,
  BT_470BG = 5,
  SMPTE_170 = 6,
  SMPTE_240 = 7,
  GENERIC_FILM = 8,
  BT_2020 = 9,
  SMPTE_428 = 10,
  SMPTE_431 = 11,
  SMPTE_432 = 12,
  EBU_3213E = 22,
}

export enum MatrixCoefficients {
  RGB = 0,
  BT_709 = 1,
  UNSPECIFIED = 2,
  BT_470M = 4,
  BT_470BG = 5,
  SMPTE_170 = 6,
  SMPTE_240 = 7,
  YCOCG = 8,
  BT_2020_NCL = 9,
  BT_2020_CL = 10,
  SMPTE_2085 = 11,
  CHROMAT_NCL = 12,
  CHROMAT_CL = 13,
  ITP_1667 = 14,
  SMPTE_428 = 15,
  SMPTE_431 = 16,
  SMPTE_432 = 17,
  EBU_3213E = 18,
}

export enum TransferCharacteristics {
  BT_709 = 1,
  UNSPECIFIED = 2,
  BT_470M = 4,
  BT_470BG = 5,
  SMPTE_170 = 6,
  SMPTE_240 = 7,
  LINEAR = 8,
  LOG_100 = 9,
  LOG_100_SQRT = 10,
  IEC_61966_2_4 = 11,
  BT_1361 = 12,
  SRGB = 13,
  BT_2020_10_BIT = 14,
  BT_2020_12_BIT = 15,
  SMPTE_2084 = 16,
  SMPTE_428 = 17,
  ARIB_STD_B67 = 18,
}

export enum VideoFullRangeFlag {
  LEGAL = 0,
  FULL = 1,
}

export enum VpxCodec {
  VP8 = 'vp08',
  VP9 = 'vp09',
}
