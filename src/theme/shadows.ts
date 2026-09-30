import { ViewStyle, Platform } from 'react-native';

export const createShadow = (elevation: number, shadowColor = '#000000', opacity = 0.15): ViewStyle => {
  if (Platform.OS === 'android') {
    return {
      elevation,
    };
  }

  const height = Math.floor(elevation / 2);
  const radius = elevation;

  return {
    shadowColor,
    shadowOffset: {
      width: 0,
      height: height > 0 ? height : 1,
    },
    shadowOpacity: opacity,
    shadowRadius: radius,
  };
};

export const shadows = {
  none: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: createShadow(2, '#000000', 0.08),
  md: createShadow(4, '#000000', 0.12),
  lg: createShadow(8, '#000000', 0.16),
  xl: createShadow(16, '#000000', 0.20),
};
