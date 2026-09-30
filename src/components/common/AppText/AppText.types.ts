import { TextProps as RNTextProps, TextStyle, StyleProp } from 'react-native';
import { TypographyVariant, ThemeColors } from '@theme';

export type TextWeight = 'regular' | 'medium' | 'semiBold' | 'bold' | 'extraBold';

export interface AppTextProps extends RNTextProps {
  /**
   * Typography variant preset (h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, caption, overline, button)
   * @default 'body1'
   */
  variant?: TypographyVariant;

  /**
   * Text color key from theme or custom color hex/rgb string
   */
  color?: keyof ThemeColors | string;

  /**
   * Font weight preset
   */
  weight?: TextWeight;

  /**
   * Text alignment
   */
  align?: TextStyle['textAlign'];

  /**
   * Text transform
   */
  transform?: TextStyle['textTransform'];

  /**
   * Custom font size override (will still use responsive scale if number)
   */
  size?: number;

  /**
   * Custom line height override
   */
  lineHeight?: number;

  /**
   * Text decoration line
   */
  decoration?: TextStyle['textDecorationLine'];

  /**
   * Custom additional styles
   */
  style?: StyleProp<TextStyle>;

  /**
   * Children text nodes
   */
  children?: React.ReactNode;
}
