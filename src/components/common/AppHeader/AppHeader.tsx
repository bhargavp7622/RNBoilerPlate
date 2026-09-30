import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@theme';
import { AppText } from '../AppText';

export interface AppHeaderProps {
  title?: string;
  subtitle?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  transparent?: boolean;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  subtitle,
  showBackButton = false,
  onBackPress,
  leftComponent,
  rightComponent,
  style,
  transparent = false,
}) => {
  const { theme } = useTheme();
  const navigation = useNavigation();

  const handleBack = () => {
    if (onBackPress) {
      onBackPress();
    } else if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: transparent ? 'transparent' : theme.colors.surface,
          borderBottomColor: theme.colors.border,
          borderBottomWidth: transparent ? 0 : 1,
          paddingHorizontal: theme.spacing.base,
        },
        style,
      ]}>
      {/* Left side */}
      <View style={styles.leftContainer}>
        {showBackButton && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleBack}
            style={[
              styles.backButton,
              {
                backgroundColor: theme.isDark ? theme.colors.surfaceVariant : theme.colors.slate100,
                borderRadius: theme.borderRadius.sm,
              },
            ]}>
            <AppText variant="body1" weight="bold" color="primary">
              ‹
            </AppText>
          </TouchableOpacity>
        )}
        {leftComponent}
      </View>

      {/* Center Title / Subtitle */}
      <View style={styles.centerContainer}>
        {title && (
          <AppText
            variant="h6"
            weight="bold"
            align="center"
            numberOfLines={1}>
            {title}
          </AppText>
        )}
        {subtitle && (
          <AppText
            variant="caption"
            color="textSecondary"
            align="center"
            numberOfLines={1}>
            {subtitle}
          </AppText>
        )}
      </View>

      {/* Right side */}
      <View style={styles.rightContainer}>
        {rightComponent}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    minWidth: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  rightContainer: {
    minWidth: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  backButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
