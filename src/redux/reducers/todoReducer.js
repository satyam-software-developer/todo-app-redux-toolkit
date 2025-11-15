// const { createSlice } = require("@reduxjs/toolkit")

// const initialState={
//     todos:[
//         {text:"Go to Gym at 6", completed: false},
//         {text: "Study at 8", completed: true}
//     ]
// }

// // Creating Reducer using Redux Toolkit

// const todoSlice = createSlice({
//     name:'todo',
//     initialState:initialState,
//     reducers:{
//         // this is add action
//         add:(state, action)=>{
//                 state.todos.push({
//                     text:action.payload,
//                     completed: false
//                 })
//         },
//         toggle:(state, action)=>{
//             state.todos.map((todo, i)=>{
//                 if(i === action.payload){
//                     todo.completed=!todo.completed;
//                 }
//                 return todo;
//             })
//         }
//     }
// });

// export const todoReducer=todoSlice.reducer;

// export const actions = todoSlice.actions;

// // selector
// export const todoSelector = (state)=>state.todoReducer.todos;

// // Reducer using redux

// // export function todoReducer(state=initialState, action){

// //     switch(action.type){
// //         case ADD_TODO:
// //             return {
// //                 ...state,
// //                 todos:[
// //                     ...state.todos,
// //                     {
// //                         text:action.text,
// //                         completed: false
// //                     }
// //                 ]
// //             }
// //         case TOGGLE_TODO:
// //             return{
// //                 ...state,
// //                 todos: state.todos.map((todo, i)=>{
// //                     if(i==action.index){
// //                         todo.completed=!todo.completed
// //                     }
// //                     return todo;
// //                 })
// //             }
// //         default:
// //             return state;
// //     }
// // }

// ============================================================
// 📄 todoReducer.js
// ============================================================
// This file defines the Redux logic for managing a Todo list.
// It uses Redux Toolkit’s `createSlice()` which simplifies
// traditional Redux setup (no need to write action types and switch cases).
// ============================================================

// Import createSlice function from Redux Toolkit
const { createSlice } = require("@reduxjs/toolkit");

// ============================================================
// 🔸 Step 1: Define the Initial State
// ============================================================
// The initial state represents what the Redux store looks like
// when the app starts (before any actions are dispatched).

const initialState = {
  todos: [
    { text: "Go to Gym at 6", completed: false },
    { text: "Study at 8", completed: true },
  ],
};

// ============================================================
// 🔸 Step 2: Create Slice
// ============================================================
// `createSlice()` automatically generates:
// - Action types (like "todo/add")
// - Action creators (like actions.add())
// - Reducer functions to handle each case

const todoSlice = createSlice({
  // A unique name for this slice of the Redux store
  name: "todo",

  // Default data for this slice
  initialState: initialState,

  // Reducer functions define how the state changes for each action
  reducers: {
    /**
     * ➕ add()
     * This action adds a new todo item to the list.
     * It takes the `text` of the todo from `action.payload`
     * and pushes a new todo object into the `todos` array.
     */
    add: (state, action) => {
      state.todos.push({
        text: action.payload, // Todo description from the action payload
        completed: false, // New todos start as not completed
      });
    },

    /**
     * ✅ toggle()
     * This action toggles (switches) the completed status
     * of the todo at the given index.
     *
     * Example: If a todo is marked completed, clicking it again
     * will unmark it, and vice versa.
     */
    toggle: (state, action) => {
      state.todos.map((todo, i) => {
        if (i === action.payload) {
          todo.completed = !todo.completed; // Flip the completed status
        }
        return todo;
      });
    },
  },
});

// ============================================================
// 🔸 Step 3: Export Reducer and Actions
// ============================================================
// These exports allow you to use this slice in your store and components.

// The actual reducer function for this slice
export const todoReducer = todoSlice.reducer;

// Export all auto-generated action creators (e.g., actions.add, actions.toggle)
export const actions = todoSlice.actions;

// ============================================================
// 🔸 Step 4: Create Selector
// ============================================================
// Selectors are small helper functions used in React components
// to easily access a specific part of the state from the Redux store.

export const todoSelector = (state) => state.todoReducer.todos;

// ============================================================
// 🧠 (Optional) Legacy Redux Implementation (Before Toolkit)
// ============================================================
// Below is the same functionality implemented using traditional Redux syntax.
// Notice how much more verbose and repetitive it is compared to createSlice().

/*
export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      // Add new todo
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
          },
        ],
      };

    case TOGGLE_TODO:
      // Toggle completion status of a todo
      return {
        ...state,
        todos: state.todos.map((todo, i) => {
          if (i === action.index) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };

    default:
      // Return unchanged state if action not recognized
      return state;
  }
}
*/

// ============================================================
// ✅ Summary
// ============================================================
// - Redux Toolkit’s createSlice() simplifies writing reducers and actions.
// - `actions.add()` and `actions.toggle()` are automatically generated.
// - State updates can be written “mutably” (push, direct assignment) because
//   Redux Toolkit uses Immer.js under the hood to ensure immutability safely.
// ============================================================
