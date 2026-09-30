import React from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@theme';
import { AppText } from '../AppText';

export interface ModalContainerProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  position?: 'bottom' | 'center';
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  dismissOnBackdropPress?: boolean;
}

export const ModalContainer: React.FC<ModalContainerProps> = ({
  visible,
  onClose,
  title,
  subtitle,
  position = 'bottom',
  children,
  containerStyle,
  dismissOnBackdropPress = true,
}) => {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  const isBottom = position === 'bottom';

  return (
    <Modal
      visible={visible}
      transparent
      animationType={isBottom ? 'slide' : 'fade'}
      onRequestClose={onClose}>
      <TouchableWithoutFeedback
        onPress={dismissOnBackdropPress ? onClose : undefined}>
        <View
          style={[
            styles.overlay,
            { backgroundColor: theme.colors.overlay },
            isBottom ? styles.bottomOverlay : styles.centerOverlay,
          ]}>
          <TouchableWithoutFeedback onPress={e => e.stopPropagation()}>
            <View
              style={[
                styles.modalContent,
                {
                  backgroundColor: theme.colors.surface,
                  borderRadius: theme.borderRadius.xl,
                  paddingBottom: isBottom ? insets.bottom + theme.spacing.base : theme.spacing.xl,
                  paddingTop: theme.spacing.lg,
                  paddingHorizontal: theme.spacing.lg,
                },
                isBottom && styles.bottomSheetRadius,
                containerStyle,
              ]}>
              {/* Drag Handle for Bottom Sheet */}
              {isBottom && (
                <View
                  style={[
                    styles.dragHandle,
                    { backgroundColor: theme.colors.border },
                  ]}
                />
              )}

              {/* Header */}
              {(title || subtitle) && (
                <View style={styles.header}>
                  <View style={{ flex: 1 }}>
                    {title && (
                      <AppText variant="h5" weight="bold">
                        {title}
                      </AppText>
                    )}
                    {subtitle && (
                      <AppText
                        variant="caption"
                        color="textSecondary"
                        style={{ marginTop: 2 }}>
                        {subtitle}
                      </AppText>
                    )}
                  </View>
                  <TouchableOpacity
                    onPress={onClose}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    style={[
                      styles.closeButton,
                      { backgroundColor: theme.colors.surfaceVariant },
                    ]}>
                    <AppText variant="body2" weight="bold" color="textSecondary">
                      ✕
                    </AppText>
                  </TouchableOpacity>
                </View>
              )}

              {/* Body */}
              <View style={styles.body}>{children}</View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
  },
  bottomOverlay: {
    justifyContent: 'flex-end',
  },
  centerOverlay: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    width: '100%',
    maxHeight: '85%',
  },
  bottomSheetRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  dragHandle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    marginTop: 4,
  },
});
