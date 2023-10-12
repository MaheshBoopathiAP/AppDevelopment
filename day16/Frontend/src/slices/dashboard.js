import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import DashboardService from '../services/dashboard.service';
import { setMessage } from './message';

// Define an async thunk to fetch dashboard data
export const fetchDashboardData = createAsyncThunk('dashboard/fetchDashboardData', async (_, thunkAPI) => {
  try {
    const response = await DashboardService.getAllProducts(); // Replace with your actual service method for fetching data
   console.log(response);
    return response.data;

  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

// Define an async thunk to create new dashboard data
export const createDashboardData = createAsyncThunk('dashboard/createDashboardData', async (data, thunkAPI) => {
  try {
    const response = await DashboardService.addProduct(data); 
    return response.data;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

// Initial state for the dashboard slice
const initialState = {
  data: null,
  status: 'idle',
  error: null,
};

// Create the dashboard slice
const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createDashboardData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload; // Update the data with the newly created data
      });
  },
});

export const selectDashboardData = (state) => state.dashboard.data;

export default dashboardSlice.reducer;

