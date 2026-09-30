import { ScrollViewProps, StyleProp, ViewStyle } from 'react-native';

export interface KeyboardAvoidScrollViewProps extends ScrollViewProps {
  /**
   * Additional offset applied to keyboard handling (useful when navigation bar or headers are present)
   * @default Platform.OS === 'ios' ? 64 : 0
   */
  keyboardVerticalOffset?: number;

  /**
   * Automatically dismiss keyboard when tapping outside inputs
   * @default true
   */
  dismissKeyboardOnTap?: boolean;

  /**
   * Container outer wrapper style
   */
  wrapperStyle?: StyleProp<ViewStyle>;

  /**
   * Inner ScrollView content container style
   */
  contentContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Children components
   */
  children?: React.ReactNode;
}
