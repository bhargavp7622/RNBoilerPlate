<div align="center">

  <h1>🚀 React Native Application</h1>
  <p>Built with <b>React Native</b> & <b>TypeScript Boilerplate</b> by <b>Bhargav Parmar</b></p>

  <p align="center">
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/typescript-100%25-blue.svg?style=flat-square&logo=typescript" alt="TypeScript" /></a>
    <a href="https://reactnative.dev/"><img src="https://img.shields.io/badge/react--native-0.87.1-cyan.svg?style=flat-square&logo=react" alt="React Native" /></a>
    <a href="https://redux-toolkit.js.org/"><img src="https://img.shields.io/badge/redux--toolkit-2.5-purple.svg?style=flat-square&logo=redux" alt="Redux Toolkit" /></a>
  </p>

</div>

---

# 🚀 React Native Application

This application was generated using the **React Native Boilerplate** by **Bhargav Parmar**.

---

## ⚙️ Installation & Setup

### 1. Install Node Dependencies

```bash
# Using Yarn (Recommended)
yarn install

# Or using NPM
npm install
```

### 2. Install iOS CocoaPods *(macOS only)*

```bash
# Navigate to ios directory and install pods
cd ios && pod install && cd ..

# Or using npx pod-install
npx pod-install
```

---

## 📱 Running the Application

### Step 1: Start Metro Bundler

```bash
yarn start
```

### Step 2: Launch on iOS

```bash
yarn ios
```

### Step 3: Launch on Android

```bash
yarn android
```

---

## 📂 Project Architecture

```
src/
├── assets/             # Images, icons, and static assets
├── components/         # Reusable atomic UI components (AppButton, AppInput, AppText, etc.)
├── constants/          # App config & layout constants
├── hooks/              # Custom React hooks (useResponsive, useDebounce, useKeyboard)
├── navigation/         # React Navigation stacks & routes
├── screens/            # Application screens
├── services/           # Axios API client, interceptors & endpoints
├── store/              # Redux Toolkit store, slices, typed hooks
├── theme/              # Color tokens, typography, metrics, shadows, ThemeContext
├── types/              # Global TypeScript declarations
└── utils/              # Responsive scaling, validation, formatting, storage
```

---

## 🛠️ Path Aliases

| Alias | Target Directory | Example Usage |
| :--- | :--- | :--- |
| `@components` | `src/components` | `import { AppButton, AppText } from '@components';` |
| `@theme` | `src/theme` | `import { useTheme, colors } from '@theme';` |
| `@hooks` | `src/hooks` | `import { useDebounce, useResponsive } from '@hooks';` |
| `@store` | `src/store` | `import { useAppDispatch, useAppSelector } from '@store';` |
| `@services` | `src/services` | `import { apiClient, apiEndpoints } from '@services';` |
| `@utils` | `src/utils` | `import { scale, storage } from '@utils';` |
| `@constants` | `src/constants` | `import { Config, Layout } from '@constants';` |
| `@types` | `src/types` | `import { ApiResponse, User } from '@types';` |
| `@navigation` | `src/navigation` | `import { Routes } from '@navigation';` |
| `@screens` | `src/screens` | `import { HomeScreen } from '@screens';` |

---

## 👨‍💻 Author & Connect

Built with ❤️ by **Bhargav Parmar**
- GitHub: [bhargavp7622](https://github.com/bhargavp7622)
- LinkedIn: [Bhargav Parmar](https://www.linkedin.com/in/parmar-b-b0aa11202/)
