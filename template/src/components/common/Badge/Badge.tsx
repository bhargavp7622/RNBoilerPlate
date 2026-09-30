import React from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useTheme } from '@theme';
import { AppText } from '../AppText';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';

export interface BadgeProps {
  label: string | number;
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'primary',
  size = 'md',
  style,
  textStyle,
}) => {
  const { theme } = useTheme();

  const getColors = (): { bg: string; text: string } => {
    switch (variant) {
      case 'secondary':
        return { bg: theme.colors.secondaryLight, text: theme.colors.secondary };
      case 'success':
        return { bg: theme.colors.successLight, text: theme.colors.success };
      case 'warning':
        return { bg: theme.colors.warningLight, text: theme.colors.warning };
      case 'error':
        return { bg: theme.colors.errorLight, text: theme.colors.error };
      case 'info':
        return { bg: theme.colors.infoLight, text: theme.colors.info };
      case 'neutral':
        return { bg: theme.colors.surfaceVariant, text: theme.colors.textSecondary };
      case 'primary':
      default:
        return { bg: theme.colors.primaryLight, text: theme.colors.primary };
    }
  };

  const { bg, text } = getColors();

  const isSmall = size === 'sm';
  const paddingVertical = isSmall ? theme.spacing.xxs : theme.spacing.xs;
  const paddingHorizontal = isSmall ? theme.spacing.xs : theme.spacing.sm;

  return (
    <View
      style={[
        styles.badge,
        {
          backgroundColor: bg,
          borderRadius: theme.borderRadius.full,
          paddingVertical,
          paddingHorizontal,
        },
        style,
      ]}>
      <AppText
        variant={isSmall ? 'overline' : 'caption'}
        weight="semiBold"
        style={[{ color: text }, textStyle]}>
        {label}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
