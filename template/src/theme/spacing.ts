import { scale, verticalScale } from '../utils/responsive';

export const spacing = {
  none: 0,
  xxs: scale(2),
  xs: scale(4),
  sm: scale(8),
  md: scale(12),
  base: scale(16),
  lg: scale(20),
  xl: scale(24),
  xxl: scale(32),
  xxxl: scale(40),
  huge: scale(48),

  // Vertical specific spacing
  vXs: verticalScale(4),
  vSm: verticalScale(8),
  vMd: verticalScale(12),
  vBase: verticalScale(16),
  vLg: verticalScale(20),
  vXl: verticalScale(24),
  vXxl: verticalScale(32),
  vHuge: verticalScale(48),
};

export type SpacingKey = keyof typeof spacing;
