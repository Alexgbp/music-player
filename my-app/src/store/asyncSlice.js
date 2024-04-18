import { createSlice } from "@reduxjs/toolkit";
import { AddLike, DeleteLike } from "./apiForRedux";

export const asyncSlice = createSlice({
  name: "track/Like",
  initialState: {
    favoriteTracks: [],
    error: null,
    status: null
  },
  reducers: {
    addLike(state, action){
      state.favoriteTracks = action.payload
    },
    deleteLike(state, action){
      state.favoriteTracks = state.favoriteTracks.map((element) => element.id !== action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(AddLike.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "rejected"
    })
    .addCase(DeleteLike.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "rejected"
    })
  },
})

export const {addLike, deleteLike} = asyncSlice.actions;
