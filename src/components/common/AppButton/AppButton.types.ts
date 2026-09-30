import { TouchableOpacityProps, StyleProp, ViewStyle, TextStyle } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface AppButtonProps extends TouchableOpacityProps {
  /**
   * Button title text
   */
  title?: string;

  /**
   * Button style variant
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * Button size preset
   * @default 'md'
   */
  size?: ButtonSize;

  /**
   * Loading state (shows spinner)
   */
  loading?: boolean;

  /**
   * Left icon or custom component
   */
  leftIcon?: React.ReactNode;

  /**
   * Right icon or custom component
   */
  rightIcon?: React.ReactNode;

  /**
   * Full width stretch
   */
  fullWidth?: boolean;

  /**
   * Container style override
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Text style override
   */
  textStyle?: StyleProp<TextStyle>;

  /**
   * Custom children if not using title
   */
  children?: React.ReactNode;
}
