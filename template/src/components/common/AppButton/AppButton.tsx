import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native';
import { useTheme } from '@theme';
import { AppText } from '../AppText';
import { AppButtonProps } from './AppButton.types';
import { getButtonStyles } from './AppButton.styles';

export const AppButton: React.FC<AppButtonProps> = ({
  title,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  style,
  textStyle,
  children,
  activeOpacity = 0.75,
  ...restProps
}) => {
  const { theme } = useTheme();
  const isDisabled = disabled || loading;

  const { container, text, iconColor } = getButtonStyles(
    theme,
    variant,
    size,
    isDisabled,
    fullWidth,
  );

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      disabled={isDisabled}
      style={[container, style]}
      {...restProps}>
      {loading ? (
        <ActivityIndicator size="small" color={iconColor} />
      ) : (
        <>
          {leftIcon && <View style={{ marginRight: theme.spacing.sm }}>{leftIcon}</View>}
          {title ? (
            <AppText
              variant={size === 'sm' ? 'buttonSmall' : 'button'}
              weight="semiBold"
              style={[text, textStyle]}>
              {title}
            </AppText>
          ) : (
            children
          )}
          {rightIcon && <View style={{ marginLeft: theme.spacing.sm }}>{rightIcon}</View>}
        </>
      )}
    </TouchableOpacity>
  );
};
