import React, { createContext, useContext, useMemo, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { lightThemeColors, darkThemeColors, ThemeColors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { borderRadius, iconSizes, buttonHeights, inputHeights } from './metrics';
import { shadows } from './shadows';

export type ThemeMode = 'light' | 'dark' | 'system';

export interface Theme {
  colors: ThemeColors;
  typography: typeof typography;
  spacing: typeof spacing;
  borderRadius: typeof borderRadius;
  iconSizes: typeof iconSizes;
  buttonHeights: typeof buttonHeights;
  inputHeights: typeof inputHeights;
  shadows: typeof shadows;
  isDark: boolean;
}

interface ThemeContextType {
  theme: Theme;
  themeMode: ThemeMode;
  isDark: boolean;
  setThemeMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  initialMode?: ThemeMode;
  themeModeOverride?: ThemeMode;
  onThemeModeChange?: (mode: ThemeMode) => void;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialMode = 'system',
  themeModeOverride,
  onThemeModeChange,
}) => {
  const systemColorScheme = useColorScheme();
  const [internalMode, setInternalMode] = React.useState<ThemeMode>(initialMode);

  const activeMode = themeModeOverride ?? internalMode;

  const isDark = useMemo(() => {
    if (activeMode === 'system') {
      return systemColorScheme === 'dark';
    }
    return activeMode === 'dark';
  }, [activeMode, systemColorScheme]);

  const colors = useMemo(() => (isDark ? darkThemeColors : lightThemeColors), [isDark]);

  const theme: Theme = useMemo(
    () => ({
      colors,
      typography,
      spacing,
      borderRadius,
      iconSizes,
      buttonHeights,
      inputHeights,
      shadows,
      isDark,
    }),
    [colors, isDark],
  );

  const setThemeMode = (mode: ThemeMode) => {
    setInternalMode(mode);
    onThemeModeChange?.(mode);
  };

  const toggleTheme = () => {
    const nextMode: ThemeMode = isDark ? 'light' : 'dark';
    setThemeMode(nextMode);
  };

  const value = useMemo(
    () => ({
      theme,
      themeMode: activeMode,
      isDark,
      setThemeMode,
      toggleTheme,
    }),
    [theme, activeMode, isDark],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    // Fallback if rendered outside ThemeProvider
    const isDarkFallback = false;
    return {
      theme: {
        colors: lightThemeColors,
        typography,
        spacing,
        borderRadius,
        iconSizes,
        buttonHeights,
        inputHeights,
        shadows,
        isDark: isDarkFallback,
      },
      themeMode: 'light',
      isDark: false,
      setThemeMode: () => {},
      toggleTheme: () => {},
    };
  }
  return context;
};
