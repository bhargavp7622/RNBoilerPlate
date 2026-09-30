import React, { useEffect } from 'react';
import {
  StatusBar,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@theme';

export interface ScreenWrapperProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  useSafeArea?: boolean;
  safeAreaEdges?: {
    top?: boolean;
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
  };
  statusBarColor?: string;
  statusBarStyle?: 'light-content' | 'dark-content';
  translucentStatusBar?: boolean;
}

export const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  style,
  contentStyle,
  backgroundColor,
  useSafeArea = true,
  safeAreaEdges = { top: true, bottom: true, left: true, right: true },
  statusBarColor,
  statusBarStyle,
  translucentStatusBar = false,
}) => {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  const resolvedBg = backgroundColor || theme.colors.background;
  const activeStatusBarStyle =
    statusBarStyle || (theme.isDark ? 'light-content' : 'dark-content');

  useEffect(() => {
    if (Platform.OS === 'android') {
      const rnStatusBar = StatusBar as any;
      if (typeof rnStatusBar.setBackgroundColor === 'function') {
        rnStatusBar.setBackgroundColor(statusBarColor || resolvedBg, true);
      }
      if (typeof rnStatusBar.setTranslucent === 'function') {
        rnStatusBar.setTranslucent(translucentStatusBar);
      }
    }
  }, [statusBarColor, resolvedBg, translucentStatusBar]);

  const safePadding: ViewStyle = useSafeArea
    ? {
        paddingTop: safeAreaEdges.top ? insets.top : 0,
        paddingBottom: safeAreaEdges.bottom ? insets.bottom : 0,
        paddingLeft: safeAreaEdges.left ? insets.left : 0,
        paddingRight: safeAreaEdges.right ? insets.right : 0,
      }
    : {};

  return (
    <View style={[styles.container, { backgroundColor: resolvedBg }, style]}>
      <StatusBar barStyle={activeStatusBarStyle} />
      <View style={[styles.content, safePadding, contentStyle]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
