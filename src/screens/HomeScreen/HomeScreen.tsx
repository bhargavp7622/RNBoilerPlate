import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  ScreenWrapper,
  KeyboardAvoidScrollView,
  AppText,
  AppButton,
  AppInput,
  AppCard,
  Badge,
  Spacer,
} from '@components';
import { useTheme } from '@theme';
import { useAppDispatch, useAppSelector } from '@hooks';
import { incrementCounter, decrementCounter, resetCounter } from '@store';

export const HomeScreen: React.FC = () => {
  const { theme, toggleTheme, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const counter = useAppSelector(state => state.user.counter);
  const [inputText, setInputText] = useState('');

  return (
    <ScreenWrapper>
      <KeyboardAvoidScrollView contentContainerStyle={styles.container}>
        {/* Top Header */}
        <View style={styles.header}>
          <Badge
            label={isDark ? 'DARK MODE 🌙' : 'LIGHT MODE ☀️'}
            variant="primary"
            size="sm"
          />
          <AppButton
            title="Toggle Theme"
            variant="ghost"
            size="sm"
            onPress={toggleTheme}
          />
        </View>

        <Spacer size="vLg" />

        {/* Hello World Card */}
        <AppCard
          variant="elevated"
          padding="lg"
          style={{ backgroundColor: theme.colors.primary }}>
          <AppText variant="h1" color="white" weight="bold">
            Hello World! 🚀
          </AppText>
          <Spacer size="xs" />
          <AppText variant="body1" color="white" style={{ opacity: 0.9 }}>
            Welcome to @bhargavp21/react-native-boilerplate
          </AppText>
        </AppCard>

        <Spacer size="vLg" />

        {/* Reusable Components Demo */}
        <AppCard variant="elevated" padding="lg">
          <AppText variant="h5" weight="bold">
            Universal AppText & Theme
          </AppText>
          <AppText variant="body2" color="textSecondary">
            All text uses responsive scaleFont and theme tokens automatically.
          </AppText>

          <Spacer size="md" />

          <AppInput
            label="Interactive Input Test"
            placeholder="Type something here..."
            value={inputText}
            onChangeText={setInputText}
            helperText={inputText ? `You typed: ${inputText}` : 'Reusable AppInput with focus styling'}
          />

          <Spacer size="sm" />

          {/* Redux State Test */}
          <AppText variant="subtitle2" weight="semiBold">
            Redux Toolkit Counter: {counter}
          </AppText>
          <Spacer size="xs" />

          <View style={styles.buttonRow}>
            <AppButton
              title="-"
              size="sm"
              variant="outline"
              style={{ width: 50, marginRight: 8 }}
              onPress={() => dispatch(decrementCounter())}
            />
            <AppButton
              title="+"
              size="sm"
              variant="primary"
              style={{ width: 50, marginRight: 8 }}
              onPress={() => dispatch(incrementCounter())}
            />
            <AppButton
              title="Reset"
              size="sm"
              variant="ghost"
              onPress={() => dispatch(resetCounter())}
            />
          </View>
        </AppCard>

        <Spacer size="vXxl" />
      </KeyboardAvoidScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
