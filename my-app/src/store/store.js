import { configureStore } from "@reduxjs/toolkit";
import {TracksSlice} from "./CurrentTrackSlice";
import { asyncSlice } from "./asyncSlice";

export default configureStore({
    reducer: {
        tracks: TracksSlice.reducer,
        favoriteTracks: asyncSlice.reducer
    },
})