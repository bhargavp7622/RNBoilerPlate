import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export const LAYOUT = {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  headerHeight: 56,
  bottomTabBarHeight: 64,
};
