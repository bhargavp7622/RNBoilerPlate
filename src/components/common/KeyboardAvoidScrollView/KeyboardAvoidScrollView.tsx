import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import { KeyboardAvoidScrollViewProps } from './KeyboardAvoidScrollView.types';

export const KeyboardAvoidScrollView: React.FC<KeyboardAvoidScrollViewProps> = ({
  children,
  keyboardVerticalOffset = Platform.OS === 'ios' ? 64 : 0,
  dismissKeyboardOnTap = true,
  wrapperStyle,
  contentContainerStyle,
  showsVerticalScrollIndicator = false,
  bounces = true,
  keyboardShouldPersistTaps = 'handled',
  ...restProps
}) => {
  const content = (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      bounces={bounces}
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      {...restProps}>
      {children}
    </ScrollView>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={[styles.container, wrapperStyle]}>
      {dismissKeyboardOnTap ? (
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          accessible={false}>
          <View style={styles.container}>{content}</View>
        </TouchableWithoutFeedback>
      ) : (
        content
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
});
