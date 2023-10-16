import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../services/auth.service";
import { setMessage } from "./message";
// Define an initial user state by parsing the user from local storage if available
const user = JSON.parse(localStorage.getItem("user"));

// Create an async thunk for user registration
export const register = createAsyncThunk(
  "auth/register",
  async ({ username, email, password, role }, thunkAPI) => {
    try {
      // Call the AuthService's register method
      const response = await AuthService.register(username, email, password, role);
      const userData = response.data;

      // Dispatch a message action with the response message
      thunkAPI.dispatch(setMessage(userData.message));

      // Return the modified user data with the role
      return userData;
    } catch (error) {
      // Handle errors and dispatch a message action with the error message
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));

      // Reject the promise with the error value
      return thunkAPI.rejectWithValue();
    }
  }
);

// Create an async thunk for user login
export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      // Call the AuthService's login method
      const data = await AuthService.login(username, password);

      // Return an object with the user data
      return { user: data };
    } catch (error) {
      // Handle errors and dispatch a message action with the error message
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));

      // Reject the promise with the error value
      return thunkAPI.rejectWithValue();
    }
  }
);

// Create an async thunk for user logout
export const logout = createAsyncThunk("auth/logout", async () => {
  // Call the AuthService's logout method
  await AuthService.logout();
});

// Define the initial state based on whether a user is available in local storage
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

// Create the auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Define any synchronous actions here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoggedIn = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      });
  },
});

export default authSlice.reducer;
