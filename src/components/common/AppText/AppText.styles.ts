import { TextStyle } from 'react-native';
import { Theme, fontWeights } from '@theme';
import { scaleFont } from '@utils';
import { AppTextProps } from './AppText.types';

export const getTextStyle = (props: AppTextProps, theme: Theme): TextStyle => {
  const {
    variant = 'body1',
    color,
    weight,
    align,
    transform,
    size,
    lineHeight,
    decoration,
  } = props;

  // 1. Base typography variant from theme
  const variantStyle = theme.typography[variant] || theme.typography.body1;

  // 2. Resolve color from theme colors or fallback to raw string / default text color
  let resolvedColor: string = theme.colors.text;
  if (color) {
    if (color in theme.colors) {
      resolvedColor = theme.colors[color as keyof typeof theme.colors] as string;
    } else {
      resolvedColor = color;
    }
  }

  // 3. Resolve weight
  const resolvedWeight = weight ? fontWeights[weight] : variantStyle.fontWeight;

  // 4. Resolve size
  const resolvedFontSize = size !== undefined ? scaleFont(size) : variantStyle.fontSize;

  return {
    ...variantStyle,
    color: resolvedColor,
    fontWeight: resolvedWeight,
    textAlign: align,
    textTransform: transform,
    fontSize: resolvedFontSize,
    lineHeight: lineHeight !== undefined ? scaleFont(lineHeight) : variantStyle.lineHeight,
    textDecorationLine: decoration,
  } as TextStyle;
};
