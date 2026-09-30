import { useState, useEffect } from 'react';
import { Dimensions, ScaledSize } from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  scaleFont,
  isTablet,
  isFoldableDevice,
  getResponsiveColumns,
  SCREEN_DIMENSIONS,
} from '../utils/responsive';

export const useResponsive = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }: { window: ScaledSize }) => {
      setDimensions(window);
    });

    return () => subscription?.remove();
  }, []);

  const isLandscape = dimensions.width > dimensions.height;
  const isFoldable = isFoldableDevice(dimensions);
  const isTabletDevice = isTablet();
  const columns = getResponsiveColumns(dimensions.width);

  return {
    width: dimensions.width,
    height: dimensions.height,
    isLandscape,
    isFoldable,
    isTablet: isTabletDevice,
    columns,
    scale,
    verticalScale,
    moderateScale,
    scaleFont,
    SCREEN_DIMENSIONS,
  };
};
