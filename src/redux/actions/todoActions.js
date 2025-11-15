// // Action constants.

// export const ADD_TODO="ADD Todo";
// export const TOGGLE_TODO="Toggle Todo";

// // Action Creators
// export const addTodo = (text)=>({text, type:ADD_TODO});
// export const toggleTodo = (index)=>({index, type: TOGGLE_TODO});

// ===================================================
// 📄 todoActions.js
// ===================================================
// This file defines the Redux **action types** and **action creators**
// for managing "Todo" items in your application.
//
// Action creators are simple functions that create and return
// an "action object" — which is then dispatched to a reducer
// to update the application's state accordingly.
// ===================================================

// ===================================================
// 🔸 STEP 1: Define Action Type Constants
// ===================================================

// Action type constant for adding a new todo item.
// Using constants helps prevent spelling errors and makes
// it easier to reuse action types across files.
export const ADD_TODO = "Add Todo";

// Action type constant for toggling (marking complete/incomplete) a todo item.
export const TOGGLE_TODO = "Toggle Todo";

// ===================================================
// 🔸 STEP 2: Define Action Creators
// ===================================================
// Action creators return an object that represents an action.
// Each action must include a "type" property (the action type constant),
// and may include additional data (payload).

/**
 * 🟢 addTodo
 * Action creator function to add a new todo item.
 *
 * @param {string} text - The text/content of the todo item.
 * @returns {object} Action object with type and payload.
 *
 * Example:
 * dispatch(addTodo("Finish React project"));
 *
 * This will send:
 * {
 *   type: "Add Todo",
 *   text: "Finish React project"
 * }
 */
export const addTodo = (text) => ({
  type: ADD_TODO, // The type of action that the reducer will handle
  text, // The todo text to be added (payload)
});

/**
 * 🟡 toggleTodo
 * Action creator function to toggle the completion state
 * (i.e., completed or pending) of a todo item at a given index.
 *
 * @param {number} index - The index/position of the todo item to toggle.
 * @returns {object} Action object with type and payload.
 *
 * Example:
 * dispatch(toggleTodo(2));
 *
 * This will send:
 * {
 *   type: "Toggle Todo",
 *   index: 2
 * }
 */
export const toggleTodo = (index) => ({
  type: TOGGLE_TODO, // The action type for toggling
  index, // Index of the todo to be toggled (payload)
});
