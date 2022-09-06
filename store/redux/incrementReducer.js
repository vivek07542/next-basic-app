import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const incrementSlice = createSlice({
  name: 'increment',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = incrementSlice.actions;
export default incrementSlice.reducer;
