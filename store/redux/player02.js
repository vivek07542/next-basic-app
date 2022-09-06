import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  score2: 0,
};

export const player02Slice = createSlice({
  name: 'player02',
  initialState,
  reducers: {
    incrementPlayer02: (state) => {
      state.score2 += 1;
    },
    conditional: (state) => {
      state.score2 = 0;
    },
  },
});
export const { incrementPlayer02, conditional } = player02Slice.actions;
export default player02Slice.reducer;
