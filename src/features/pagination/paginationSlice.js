import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTotalVideos } from "./paginationAPI";

let initialState = {
  totalVideos: 0,
  itemsPerPage: 4,
  start: 0,
  end: 4,
  pageNumber: 1,
  isLoading: false,
  isError: false,
  error: "",
};

// thunk function
export const fetchTotalVideos = createAsyncThunk(
  "pagination/fetchTotalVideos",
  async ({ tags, search, author }) => {
    const totalVideos = await getTotalVideos(tags, search, author);
    return totalVideos;
  }
);
const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    paginate: (state, action) => {
      state.pageNumber = action.payload;
      state.start = (action.payload - 1) * state.itemsPerPage;
      let end = state.itemsPerPage * action.payload;
      state.end = end > state.totalVideos ? state.totalVideos : end;
    },
    resetPage: (state) => {
      state.start = 0;
      state.end = state.itemsPerPage;
      state.pageNumber = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTotalVideos.pending, (state, action) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTotalVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.totalVideos = action.payload;
      })
      .addCase(fetchTotalVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.totalVideos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default paginationSlice.reducer;
export const { paginate, resetPage } = paginationSlice.actions;
