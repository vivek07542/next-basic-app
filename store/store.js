import { configureStore } from '@reduxjs/toolkit';
import increments from './redux/incrementReducer';
import player01 from './redux/player01';
import player02 from './redux/player02';

export const store = configureStore({
  reducer: { increment: increments, player01: player01, player02: player02 },
});
