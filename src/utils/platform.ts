import { Platform } from 'react-native';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const platformVersion = Platform.Version;

export const selectPlatform = <T>(iosValue: T, androidValue: T): T => {
  return Platform.select<T>({
    ios: iosValue,
    android: androidValue,
    default: iosValue,
  }) as T;
};
