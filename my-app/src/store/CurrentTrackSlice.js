import { createSlice } from "@reduxjs/toolkit";

export const TracksSlice = createSlice({
  name: 'TracksSlice',
  initialState: {
    track: [],
    currentTrack: null,
    isPlay: false,
    isMix: false,
    isLike: false,
    status: null,
    error: null,
  },
  reducers: {
    setTrack(state, action) {
      state.track = action.payload;
    },
    setCurrentTrack(state, action) {
      state.currentTrack = action.payload;
      state.isPlay = true;
    },
    setPlaying(state) {
      state.isPlay = !state.isPlay;
    },
    setPrevTrack(state) {
      state.isPlay = true
      if (state.isMix) {
        const randomIndex = Math.floor(Math.random() * state.track.length);
        state.currentTrack = state.track[randomIndex];
        return;
      }
      const currentIndex = state.track.findIndex(
        (element) => element.id === state.currentTrack.id
      );
      if (currentIndex === 0) {
        return;
      }
      state.currentTrack = state.track[currentIndex - 1];
    },
    setNextTrack(state) {
      state.isPlay = true
      if (state.isMix) {
        const randomIndex = Math.floor(Math.random() * state.track.length);
        state.currentTrack = state.track[randomIndex];
        return;
      }
      const currentIndex = state.track.findIndex(
        (element) => element.id === state.currentTrack.id);
      if (currentIndex === state.track.length - 1) {
        return;
      }
      state.currentTrack = state.track[currentIndex + 1];
    },
    shuffleTrack(state) {
      state.isMix = !state.isMix;
    },
    setLike(state){
      state.isLike = !state.isLike
    }
  },
});

export const {setTrack, setCurrentTrack, setPlaying, setPrevTrack, setNextTrack, shuffleTrack, setLike}  =  TracksSlice.actions;