import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useTheme } from '@theme';
import { AppText } from '../AppText';

export interface AppLoaderProps {
  loading?: boolean;
  message?: string;
  fullscreen?: boolean;
  size?: 'small' | 'large';
  color?: string;
  style?: StyleProp<ViewStyle>;
}

export const AppLoader: React.FC<AppLoaderProps> = ({
  loading = true,
  message,
  fullscreen = false,
  size = 'large',
  color,
  style,
}) => {
  const { theme } = useTheme();

  if (!loading) return null;

  const spinnerColor = color || theme.colors.primary;

  if (fullscreen) {
    return (
      <View
        style={[
          styles.fullscreenOverlay,
          { backgroundColor: theme.colors.overlay },
          style,
        ]}>
        <View
          style={[
            styles.dialogBox,
            {
              backgroundColor: theme.colors.surface,
              borderRadius: theme.borderRadius.lg,
              padding: theme.spacing.xl,
            },
          ]}>
          <ActivityIndicator size={size} color={spinnerColor} />
          {message && (
            <AppText
              variant="body2"
              weight="medium"
              style={{ marginTop: theme.spacing.md }}>
              {message}
            </AppText>
          )}
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.inlineContainer, style]}>
      <ActivityIndicator size={size} color={spinnerColor} />
      {message && (
        <AppText
          variant="caption"
          color="textSecondary"
          style={{ marginTop: theme.spacing.xs }}>
          {message}
        </AppText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  fullscreenOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogBox: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120,
    minHeight: 100,
  },
  inlineContainer: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
