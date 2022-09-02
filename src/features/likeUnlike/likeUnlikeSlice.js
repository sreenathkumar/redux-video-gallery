import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateVideo } from "./likeUnlikeAPI";

export const updateLikeUnlike = createAsyncThunk(
  "video/updateLikeUnlike",
  async (id, { getState }) => {
    const state = getState();
    const { likes, unlikes } = state.video.video;
    await updateVideo(id, likes, unlikes);
  }
);

const LikeUnlikeSlice = createSlice({
  name: "video/likeUnlike",
  initialState: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateLikeUnlike.pending, (state, action) => {})
      .addCase(updateLikeUnlike.fulfilled, (state, action) => {})
      .addCase(updateLikeUnlike.rejected, (state, action) => {});
  },
});

export default LikeUnlikeSlice.reducer;
