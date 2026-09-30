export const palette = {
  // Brand Colors
  primary50: '#EEF2FF',
  primary100: '#E0E7FF',
  primary200: '#C7D2FE',
  primary300: '#A5B4FC',
  primary400: '#818CF8',
  primary500: '#6366F1', // Core Brand Primary
  primary600: '#4F46E5',
  primary700: '#4338CA',
  primary800: '#3730A3',
  primary900: '#312E81',

  // Secondary / Accent
  secondary50: '#FDF4FF',
  secondary100: '#FAE8FF',
  secondary500: '#D946EF',
  secondary600: '#C026D3',
  secondary700: '#A21CAF',

  // Neutrals / Greys
  white: '#FFFFFF',
  black: '#000000',
  slate50: '#F8FAFC',
  slate100: '#F1F5F9',
  slate200: '#E2E8F0',
  slate300: '#CBD5E1',
  slate400: '#94A3B8',
  slate500: '#64748B',
  slate600: '#475569',
  slate700: '#334155',
  slate800: '#1E293B',
  slate900: '#0F172A',
  slate950: '#020617',

  // Semantic Status
  successLight: '#DCFCE7',
  success: '#10B981',
  successDark: '#047857',

  warningLight: '#FEF3C7',
  warning: '#F59E0B',
  warningDark: '#B45309',

  errorLight: '#FEE2E2',
  error: '#EF4444',
  errorDark: '#B91C1C',

  infoLight: '#E0F2FE',
  info: '#0EA5E9',
  infoDark: '#0369A1',

  // Overlay
  overlayLight: 'rgba(15, 23, 42, 0.4)',
  overlayDark: 'rgba(0, 0, 0, 0.75)',
};

export const lightThemeColors = {
  primary: palette.primary600,
  primaryLight: palette.primary100,
  primaryDark: palette.primary800,
  onPrimary: palette.white,

  secondary: palette.secondary600,
  secondaryLight: palette.secondary100,
  onSecondary: palette.white,

  background: palette.slate50,
  surface: palette.white,
  surfaceVariant: palette.slate100,
  card: palette.white,

  text: palette.slate900,
  textSecondary: palette.slate600,
  textMuted: palette.slate400,
  textInverse: palette.white,

  border: palette.slate200,
  borderFocus: palette.primary600,
  divider: palette.slate200,

  inputBackground: palette.slate100,
  inputPlaceholder: palette.slate400,

  success: palette.success,
  successLight: palette.successLight,
  warning: palette.warning,
  warningLight: palette.warningLight,
  error: palette.error,
  errorLight: palette.errorLight,
  info: palette.info,
  infoLight: palette.infoLight,

  white: palette.white,
  black: palette.black,
  slate100: palette.slate100,
  slate200: palette.slate200,
  slate300: palette.slate300,
  slate800: palette.slate800,
  slate900: palette.slate900,

  overlay: palette.overlayLight,
  shadow: palette.slate900,
  isDark: false,
};

export const darkThemeColors = {
  primary: palette.primary500,
  primaryLight: palette.primary900,
  primaryDark: palette.primary400,
  onPrimary: palette.white,

  secondary: palette.secondary500,
  secondaryLight: palette.secondary700,
  onSecondary: palette.white,

  background: palette.slate950,
  surface: palette.slate900,
  surfaceVariant: palette.slate800,
  card: palette.slate900,

  text: palette.slate50,
  textSecondary: palette.slate400,
  textMuted: palette.slate500,
  textInverse: palette.slate900,

  border: palette.slate800,
  borderFocus: palette.primary400,
  divider: palette.slate800,

  inputBackground: palette.slate800,
  inputPlaceholder: palette.slate500,

  success: palette.success,
  successLight: 'rgba(16, 185, 129, 0.2)',
  warning: palette.warning,
  warningLight: 'rgba(245, 158, 11, 0.2)',
  error: palette.error,
  errorLight: 'rgba(239, 68, 68, 0.2)',
  info: palette.info,
  infoLight: 'rgba(14, 165, 233, 0.2)',

  white: palette.white,
  black: palette.black,
  slate100: palette.slate100,
  slate200: palette.slate200,
  slate300: palette.slate300,
  slate800: palette.slate800,
  slate900: palette.slate900,

  overlay: palette.overlayDark,
  shadow: palette.black,
  isDark: true,
};

export type ThemeColors = typeof lightThemeColors;
