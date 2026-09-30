import React from 'react';
import { Text as RNText } from 'react-native';
import { useTheme } from '@theme';
import { AppTextProps } from './AppText.types';
import { getTextStyle } from './AppText.styles';

/**
 * Universal Typography Component for the Boilerplate.
 * Automatically respects active theme (light/dark) and responsive font scaling.
 */
export const AppText: React.FC<AppTextProps> = ({
  style,
  children,
  ...restProps
}) => {
  const { theme } = useTheme();
  const computedStyle = getTextStyle(restProps, theme);

  return (
    <RNText
      style={[computedStyle, style]}
      allowFontScaling={false}
      {...restProps}>
      {children}
    </RNText>
  );
};
