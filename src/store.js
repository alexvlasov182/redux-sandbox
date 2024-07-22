import { createSlice, configureStore } from "@reduxjs/toolkit";

// Step 1: create a slice
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    random: (state) => state + Math.floor(Math.random() * 10),
  },
});

// Extract the action creatores and the reducres from the slice
export const { increment, decrement, random } = counterSlice.actions;

// Step 2: Configure the store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
