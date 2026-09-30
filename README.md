<div align="center">

  <img src="https://raw.githubusercontent.com/bhargavp7622/RNBoilerPlate/main/assets/banner.jpg" width="100%" alt="The React Native Boilerplate" />

  <br />
  <br />

  <p align="center">
    <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-green.svg?style=flat-square" alt="License" /></a>
    <a href="https://npmjs.com/package/@bhargavp22/react-native-boilerplate"><img src="https://img.shields.io/npm/v/@bhargavp22/react-native-boilerplate.svg?style=flat-square&color=CB3837&logo=npm" alt="NPM Version" /></a>
    <a href="https://npmjs.com/package/@bhargavp22/react-native-boilerplate"><img src="https://img.shields.io/npm/dm/@bhargavp22/react-native-boilerplate.svg?style=flat-square&color=2088FF&logo=npm" alt="Downloads" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/typescript-100%25-blue.svg?style=flat-square&logo=typescript" alt="TypeScript" /></a>
    <a href="https://reactnative.dev/"><img src="https://img.shields.io/badge/react--native-0.87-cyan.svg?style=flat-square&logo=react" alt="React Native" /></a>
    <a href="https://redux-toolkit.js.org/"><img src="https://img.shields.io/badge/redux--toolkit-2.5-purple.svg?style=flat-square&logo=redux" alt="Redux Toolkit" /></a>
  </p>

</div>

---

# The React Native Boilerplate

This project is a **React Native boilerplate** designed to **Bhargav Parmar** production-ready, enterprise-grade mobile applications.

The boilerplate provides **an optimized architecture for building solid cross-platform mobile applications** with a clean separation of concerns between the UI, state management, and business logic. It is fully documented so that every piece of code in your application can be easily understood, maintained, and scaled.

---

## 🚀 Quick Start & Project Creation

### 1. Initialize a New Project

Run the following command to create a brand new React Native app with this boilerplate:

```bash
# Using React Native Community CLI
npx @react-native-community/cli init MyApp --template @bhargavp22/react-native-boilerplate
```

> Replace `MyApp` with your desired application name.

---

## ⚙️ Installation & Setup

Navigate into your newly created project directory:

```bash
cd MyApp
```

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

In your project root, start the Metro development server:

```bash
# Using Yarn
yarn start

# Or using NPM
npm start
```

### Step 2: Launch on iOS

```bash
# Using Yarn
yarn ios

# Or run on a specific simulator
yarn ios --simulator="iPhone 16 Pro"

# Or using NPM
npm run ios
```

### Step 3: Launch on Android

Ensure an Android emulator is running or a physical device is connected with USB Debugging enabled:

```bash
# Using Yarn
yarn android

# Or using NPM
npm run android
```

---

## 📂 Project Architecture

```
MyApp/
├── src/
│   ├── assets/             # Images, icons, and static assets
│   ├── components/         # Reusable atomic UI components
│   │   └── common/
│   │       ├── AppText/
│   │       ├── AppButton/
│   │       ├── AppInput/
│   │       ├── KeyboardAvoidScrollView/
│   │       ├── ScreenWrapper/
│   │       ├── AppHeader/
│   │       ├── AppCard/
│   │       ├── AppLoader/
│   │       ├── Spacer/
│   │       ├── Badge/
│   │       └── ModalContainer/
│   ├── constants/          # App config & layout constants
│   ├── hooks/              # Custom React hooks (useResponsive, useDebounce, etc.)
│   ├── navigation/         # React Navigation stacks & routes
│   ├── screens/            # Application screens
│   ├── services/           # Axios API client & endpoints
│   ├── store/              # Redux Toolkit store, slices, typed hooks
│   ├── theme/              # Color tokens, typography, metrics, useTheme
│   ├── types/              # Global TypeScript declarations
│   └── utils/              # Responsive scaling, validation, formatting, storage
├── App.tsx                 # Root application wrapper with providers
├── babel.config.js         # Path alias & reanimated plugin setup
├── tsconfig.json           # Path alias definitions
└── package.json            # Project dependencies & scripts
```

---
## 👨‍💻 Author & Connect

<div align="center">
  <h3>Built with ❤️ by <strong>Bhargav Parmar</strong></h3>
  <p>Mobile Application Developer | React Native Specialist</p>

  <a href="https://github.com/bhargavp7622">
    <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" />
  </a>
  &nbsp;
  <a href="https://www.linkedin.com/in/parmar-b-b0aa11202/">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  &nbsp;
  <a href="https://npmjs.com/~bhargavp22">
    <img src="https://img.shields.io/badge/NPM-CB3837?style=flat-square&logo=npm&logoColor=white" alt="NPM Profile" />
  </a>

</div>

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
