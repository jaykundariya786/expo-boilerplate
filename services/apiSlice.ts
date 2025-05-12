import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import apiInstance from "@/config/axiosConfig";

// Define types
interface ApiState {
  data: any | null;
  loading: boolean;
  error: string | null;
}

// Async Thunk for fetching data
export const fetchData = createAsyncThunk<any, void, { rejectValue: string }>(
  "data/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiInstance.get("/data-endpoint");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const initialState: ApiState = {
  data: null,
  loading: false,
  error: null,
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(
        fetchData.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || "An error occurred";
        }
      );
  },
});

export default apiSlice.reducer;
