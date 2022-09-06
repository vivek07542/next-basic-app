import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  score1: 0,
  condition: 5,
};

export const player01Slice = createSlice({
  name: 'player01',
  initialState,
  reducers: {
    incrementPlayer01: (state) => {
      state.score1 += 1;
    },
    conditions: (state, action) => {
      state.condition = Number(action.payload);
      state.score1 = 0;
    },
  },
});
export const { incrementPlayer01, conditions } = player01Slice.actions;
export default player01Slice.reducer;
