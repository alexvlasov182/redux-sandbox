import { createSlice, configureStore } from "@reduxjs/toolkit";

// Create a slice
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
  },
});

// Extract the action creator and the reducer
const { increment } = counterSlice.actions;
const counterReducer = counterSlice.reducer;

// Configure the store
const store = configureStore({
  reducer: counterReducer,
});

// Log the intial state
console.log(store.getState());

// Subscribe to store updates
const unsubscribe = store.subscribe(() => {
  console.log("State after dispatch:", store.getState());
});

// Dispatch actions
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());

// Log the update state
unsubscribe();
