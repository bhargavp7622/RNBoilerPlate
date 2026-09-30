import { TextInputProps, StyleProp, ViewStyle, TextStyle } from 'react-native';

export type InputSize = 'sm' | 'md' | 'lg';

export interface AppInputProps extends TextInputProps {
  /**
   * Top label text
   */
  label?: string;

  /**
   * Error message string
   */
  error?: string;

  /**
   * Helper description text
   */
  helperText?: string;

  /**
   * Input sizing
   * @default 'md'
   */
  size?: InputSize;

  /**
   * Left icon or custom accessory component
   */
  leftIcon?: React.ReactNode;

  /**
   * Right icon or custom accessory component
   */
  rightIcon?: React.ReactNode;

  /**
   * Show eye toggle button if secureTextEntry is true
   * @default true
   */
  enablePasswordToggle?: boolean;

  /**
   * Disabled editable state
   */
  disabled?: boolean;

  /**
   * Outer container style
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Input box container style
   */
  inputContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Input text style
   */
  style?: StyleProp<TextStyle>;
}
