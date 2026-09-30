import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserPreferences {
  notificationsEnabled: boolean;
  biometricsEnabled: boolean;
  language: string;
  currency: string;
}

interface UserState {
  preferences: UserPreferences;
  counter: number;
}

const initialState: UserState = {
  preferences: {
    notificationsEnabled: true,
    biometricsEnabled: false,
    language: 'en',
    currency: 'USD',
  },
  counter: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updatePreferences: (state, action: PayloadAction<Partial<UserPreferences>>) => {
      state.preferences = { ...state.preferences, ...action.payload };
    },
    incrementCounter: state => {
      state.counter += 1;
    },
    decrementCounter: state => {
      state.counter = Math.max(0, state.counter - 1);
    },
    resetCounter: state => {
      state.counter = 0;
    },
  },
});

export const { updatePreferences, incrementCounter, decrementCounter, resetCounter } = userSlice.actions;
export default userSlice.reducer;
