import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '@theme';
import { AppText } from '../AppText';
import { AppInputProps } from './AppInput.types';
import { getInputStyles } from './AppInput.styles';

export const AppInput: React.FC<AppInputProps> = ({
  label,
  error,
  helperText,
  size = 'md',
  leftIcon,
  rightIcon,
  enablePasswordToggle = true,
  secureTextEntry,
  disabled = false,
  containerStyle,
  inputContainerStyle,
  style,
  onFocus,
  onBlur,
  placeholderTextColor,
  ...restProps
}) => {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(Boolean(secureTextEntry));

  const hasError = Boolean(error);
  const isSecure = Boolean(secureTextEntry);

  const { inputWrapper, input } = getInputStyles(
    theme,
    size,
    isFocused,
    hasError,
    disabled,
  );

  const handleFocus = (e: any) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordHidden(prev => !prev);
  };

  return (
    <View style={[{ marginBottom: theme.spacing.md }, containerStyle]}>
      {/* Label */}
      {label && (
        <AppText
          variant="subtitle2"
          weight="medium"
          color={hasError ? 'error' : 'textSecondary'}
          style={{ marginBottom: theme.spacing.xs }}>
          {label}
        </AppText>
      )}

      {/* Input Box Container */}
      <View style={[inputWrapper, inputContainerStyle]}>
        {leftIcon && (
          <View style={{ marginRight: theme.spacing.sm }}>{leftIcon}</View>
        )}

        <TextInput
          editable={!disabled}
          placeholderTextColor={placeholderTextColor || theme.colors.inputPlaceholder}
          secureTextEntry={isSecure ? isPasswordHidden : false}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={[input, style]}
          {...restProps}
        />

        {isSecure && enablePasswordToggle ? (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={togglePasswordVisibility}
            style={{ padding: theme.spacing.xs, marginLeft: theme.spacing.xs }}>
            <AppText
              variant="caption"
              weight="semiBold"
              color="primary">
              {isPasswordHidden ? 'SHOW' : 'HIDE'}
            </AppText>
          </TouchableOpacity>
        ) : (
          rightIcon && (
            <View style={{ marginLeft: theme.spacing.sm }}>{rightIcon}</View>
          )
        )}
      </View>

      {/* Error / Helper Text */}
      {hasError ? (
        <AppText
          variant="caption"
          color="error"
          style={{ marginTop: theme.spacing.xxs }}>
          {error}
        </AppText>
      ) : helperText ? (
        <AppText
          variant="caption"
          color="textMuted"
          style={{ marginTop: theme.spacing.xxs }}>
          {helperText}
        </AppText>
      ) : null}
    </View>
  );
};
