import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { storage } from '../../utils/storage';

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role?: string;
}

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  user: null,
  isLoading: false,
  error: null,
};

// Async thunk for simulated or real login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials: { email: string; password?: string }, { rejectWithValue }) => {
    try {
      // Simulate network request
      await new Promise<void>(resolve => setTimeout(() => resolve(), 800));

      const mockUser: User = {
        id: 'usr_101',
        name: credentials.email.split('@')[0] || 'Bhargav Parmar',
        email: credentials.email,
        role: 'Senior React Native Engineer',
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      };
      const token = 'jwt_mock_token_secret_123456';

      await storage.setItem('auth_token', token);
      await storage.setItem('auth_user', mockUser);

      return { user: mockUser, token };
    } catch (err: any) {
      return rejectWithValue(err.message || 'Failed to login');
    }
  },
);

export const restoreAuthSession = createAsyncThunk(
  'auth/restoreAuthSession',
  async (_, { rejectWithValue }) => {
    try {
      const token = await storage.getItem<string>('auth_token');
      const user = await storage.getItem<User>('auth_user');
      if (token && user) {
        return { token, user };
      }
      return null;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  },
);

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  await storage.removeItem('auth_token');
  await storage.removeItem('auth_user');
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    clearAuthError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    // Login
    builder.addCase(loginUser.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = (action.payload as string) || 'Authentication failed';
    });

    // Restore session
    builder.addCase(restoreAuthSession.fulfilled, (state, action) => {
      if (action.payload) {
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      }
    });

    // Logout
    builder.addCase(logoutUser.fulfilled, state => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      state.error = null;
    });
  },
});

export const { setUser, clearAuthError } = authSlice.actions;
export default authSlice.reducer;
