import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Theme } from '@theme';
import { ButtonVariant, ButtonSize } from './AppButton.types';

export const getButtonStyles = (
  theme: Theme,
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  disabled = false,
  fullWidth = false,
): { container: ViewStyle; text: TextStyle; iconColor: string } => {
  const { colors, spacing, borderRadius, buttonHeights, shadows } = theme;

  let containerBg: string = colors.primary;
  let textColor: string = colors.onPrimary;
  let borderColor: string = 'transparent';
  let borderWidth = 0;
  let elevationShadow = shadows.sm;

  switch (variant) {
    case 'secondary':
      containerBg = colors.secondary;
      textColor = colors.onSecondary;
      break;
    case 'outline':
      containerBg = 'transparent';
      textColor = colors.primary;
      borderColor = colors.primary;
      borderWidth = 1.5;
      elevationShadow = shadows.none;
      break;
    case 'ghost':
      containerBg = 'transparent';
      textColor = colors.primary;
      elevationShadow = shadows.none;
      break;
    case 'danger':
      containerBg = colors.error;
      textColor = colors.white;
      break;
    case 'success':
      containerBg = colors.success;
      textColor = colors.white;
      break;
    case 'primary':
    default:
      containerBg = colors.primary;
      textColor = colors.onPrimary;
      break;
  }

  // Sizing
  let height = buttonHeights.md;
  let paddingHorizontal = spacing.lg;

  if (size === 'sm') {
    height = buttonHeights.sm;
    paddingHorizontal = spacing.md;
  } else if (size === 'lg') {
    height = buttonHeights.lg;
    paddingHorizontal = spacing.xl;
  }

  if (disabled) {
    containerBg = theme.isDark ? colors.surfaceVariant : colors.slate200;
    textColor = colors.textMuted;
    borderColor = 'transparent';
    elevationShadow = shadows.none;
  }

  const container: ViewStyle = {
    height,
    paddingHorizontal,
    borderRadius: borderRadius.md,
    backgroundColor: containerBg,
    borderColor,
    borderWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: fullWidth ? 'stretch' : 'auto',
    opacity: disabled ? 0.7 : 1,
    ...elevationShadow,
  };

  const text: TextStyle = {
    color: textColor,
    textAlign: 'center',
  };

  return { container, text, iconColor: textColor };
};
