import { ViewStyle, TextStyle } from 'react-native';
import { Theme } from '@theme';
import { InputSize } from './AppInput.types';

export const getInputStyles = (
  theme: Theme,
  size: InputSize = 'md',
  isFocused = false,
  hasError = false,
  disabled = false,
): {
  inputWrapper: ViewStyle;
  input: TextStyle;
} => {
  const { colors, spacing, borderRadius, inputHeights, typography } = theme;

  let height = inputHeights.md;
  let paddingHorizontal = spacing.base;

  if (size === 'sm') {
    height = inputHeights.sm;
    paddingHorizontal = spacing.md;
  } else if (size === 'lg') {
    height = inputHeights.lg;
    paddingHorizontal = spacing.lg;
  }

  let borderColor = theme.isDark ? colors.slate800 : colors.slate200;
  let backgroundColor = colors.inputBackground;

  if (isFocused) {
    borderColor = colors.borderFocus;
  }
  if (hasError) {
    borderColor = colors.error;
  }
  if (disabled) {
    backgroundColor = theme.isDark ? colors.slate900 : colors.slate100;
    borderColor = colors.border;
  }

  const inputWrapper: ViewStyle = {
    height,
    paddingHorizontal,
    borderRadius: borderRadius.md,
    backgroundColor,
    borderWidth: 1.5,
    borderColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const input: TextStyle = {
    flex: 1,
    height: '100%',
    color: disabled ? colors.textMuted : colors.text,
    fontSize: typography.body1.fontSize,
    paddingVertical: 0,
  };

  return { inputWrapper, input };
};
