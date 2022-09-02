import { getRelatedVideos } from "./relatedVideosAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  relatedVideos: [],
  filterByAuthor: "",
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchRelatedVideos = createAsyncThunk(
  "relatedVideos/fetchRelatedVideos",
  async ({ tags, id }, { getState }) => {
    const author = getState().relatedVideos.filterByAuthor;

    const relatedVideos = await getRelatedVideos({ tags, id, author });
    return relatedVideos;
  }
);

const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  reducers: {
    filterByauthor: (state, action) => {
      state.filterByAuthor = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = action.payload;
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default relatedVideosSlice.reducer;
export const { filterByauthor } = relatedVideosSlice.actions;
