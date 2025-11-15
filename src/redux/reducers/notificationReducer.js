// import {createSlice} from '@reduxjs/toolkit'
// import {actions} from './todoReducer'

// const initialState={
//     message:""
// }

// const notificationSlice = createSlice({
//     name:'notification',
//     initialState,
//     reducers:{
//         reset: (state, action)=>{
//             state.message="";
//         }
//     },
//     // extraReducers:{
//     //     "todo/add":(state, action)=>{
//     //       state.message="Todo is created";
//     //     }
//     // }
//     // extraReducers:(builder)=>{
//     //     builder.addCase(actions.add, (state, action)=>{
//     //         state.message="Todo is created";
//     //     })
//     // }
//     extraReducers:{
//         // map objects: [key]: value
//         [actions.add]: (state, action)=>{
//             state.message="Todo is created";
//         }
//     }
// });

// export const notificationReducer = notificationSlice.reducer;

// export const resetNotification = notificationSlice.actions.reset;

// export const notificationSelector = (state)=>state.notificationReducer.message;

// ============================================================
// 📄 notificationReducer.js
// ============================================================
// This file defines a Redux slice for managing app notifications.
// It is used to show short success messages (like “Todo is created”)
// whenever certain Redux actions occur in other slices (e.g., todoReducer).
//
// We use Redux Toolkit’s `createSlice()` and `extraReducers`
// to connect notifications with other reducers’ actions.
// ============================================================

// Import createSlice from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Import actions from the todo reducer so we can listen for them here
import { actions } from "./todoReducer";

// ============================================================
// 🔸 Step 1: Define Initial State
// ============================================================
// The initial state has just one property: `message`.
// It will hold the latest notification text (if any).

const initialState = {
  message: "", // Empty by default (no notification)
};

// ============================================================
// 🔸 Step 2: Create the Notification Slice
// ============================================================
// This slice manages notifications and listens to actions from other slices.
// It also has its own reducer to reset messages after a few seconds.

const notificationSlice = createSlice({
  // The slice name (used in Redux DevTools and store)
  name: "notification",

  // Default state
  initialState,

  // Reducers (only for notification-specific actions)
  reducers: {
    /**
     * 🧹 reset()
     * This reducer clears any current notification message.
     * Used after showing a success alert for a few seconds.
     */
    reset: (state, action) => {
      state.message = "";
    },
  },

  // ========================================================
  // 🔸 Step 3: extraReducers
  // ========================================================
  // extraReducers allows this slice to respond to actions
  // defined in other slices (like the Todo slice).
  // Here, when a "todo/add" action is dispatched,
  // we automatically update the notification message.
  // ========================================================

  extraReducers: {
    /**
     * When the "add" action from todoReducer is dispatched,
     * this function runs and sets the notification message.
     *
     * Syntax `[actions.add]` dynamically uses the add action type
     * generated from the todo slice.
     */
    [actions.add]: (state, action) => {
      state.message = "Todo is created"; // Success message
    },
  },
});

// ============================================================
// 🔸 Step 4: Export Reducer, Actions, and Selector
// ============================================================

// The main reducer function that will be combined in the Redux store
export const notificationReducer = notificationSlice.reducer;

// Export the reset action creator for clearing notifications
export const resetNotification = notificationSlice.actions.reset;

// Selector function to easily access the notification message from state
export const notificationSelector = (state) =>
  state.notificationReducer.message;
