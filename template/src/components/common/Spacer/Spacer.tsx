import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { useTheme, SpacingKey } from '@theme';
import { scale, verticalScale } from '@utils';

export interface SpacerProps {
  size?: SpacingKey | number;
  horizontal?: boolean;
  flex?: number;
  style?: StyleProp<ViewStyle>;
}

export const Spacer: React.FC<SpacerProps> = ({
  size = 'md',
  horizontal = false,
  flex,
  style,
}) => {
  const { theme } = useTheme();

  if (flex !== undefined) {
    return <View style={[{ flex }, style]} />;
  }

  let dimension: number;
  if (typeof size === 'number') {
    dimension = horizontal ? scale(size) : verticalScale(size);
  } else {
    dimension = theme.spacing[size] ?? theme.spacing.md;
  }

  const spacerStyle: ViewStyle = horizontal
    ? { width: dimension }
    : { height: dimension };

  return <View style={[spacerStyle, style]} />;
};
