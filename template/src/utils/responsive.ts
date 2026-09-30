import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Base dimensions from standard modern mobile design (iPhone 14 / modern Android)
const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;

/**
 * Scale dimension horizontally based on screen width
 */
export const scale = (size: number): number => {
  return (SCREEN_WIDTH / BASE_WIDTH) * size;
};

/**
 * Scale dimension vertically based on screen height
 */
export const verticalScale = (size: number): number => {
  return (SCREEN_HEIGHT / BASE_HEIGHT) * size;
};

/**
 * Moderate scaling with a resize factor (default 0.5)
 */
export const moderateScale = (size: number, factor = 0.5): number => {
  return size + (scale(size) - size) * factor;
};

/**
 * Scale font size with respect to device pixel density
 */
export const scaleFont = (size: number): number => {
  const newSize = size * (SCREEN_WIDTH / BASE_WIDTH);
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
};

/**
 * Check if the current device is a tablet
 */
export const isTablet = (): boolean => {
  const pixelDensity = PixelRatio.get();
  const adjustedWidth = SCREEN_WIDTH * pixelDensity;
  const adjustedHeight = SCREEN_HEIGHT * pixelDensity;
  if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
    return true;
  }
  return adjustedWidth >= 1920 || adjustedHeight >= 1920;
};

/**
 * Check if device is a foldable device or large screen
 */
export const isFoldableDevice = (dimensions = { width: SCREEN_WIDTH, height: SCREEN_HEIGHT }): boolean => {
  const minDimension = Math.min(dimensions.width, dimensions.height);
  return minDimension >= 600 && minDimension < 900;
};

/**
 * Calculate responsive grid columns count based on width
 */
export const getResponsiveColumns = (width: number = SCREEN_WIDTH): number => {
  if (width >= 1024) return 4;
  if (width >= 768) return 3;
  if (width >= 480) return 2;
  return 1;
};

export const SCREEN_DIMENSIONS = {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  isSmallDevice: SCREEN_WIDTH < 375,
  isMediumDevice: SCREEN_WIDTH >= 375 && SCREEN_WIDTH < 414,
  isLargeDevice: SCREEN_WIDTH >= 414,
};
