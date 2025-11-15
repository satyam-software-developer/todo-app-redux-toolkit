// export const ADD_NOTE="Add Note";
// export const DELETE_NOTE="Delete Note";

// // Action Creators
// export const addNote = (text)=>({text, type:ADD_NOTE});
// export const deleteNote = (index)=>({index, type: DELETE_NOTE});

// ===============================
// 📄 noteActions.js
// ===============================
// This file defines all the *action types* and *action creators*
// related to the Note feature of the application.
// These actions are dispatched to modify the Redux store state
// — for example, to add or delete a note.

// ===============================
// 🔸 Step 1: Define Action Type Constants
// ===============================

// Constant for adding a new note
// Helps prevent typos and makes it easy to reuse the same action type across files
export const ADD_NOTE = "Add Note";

// Constant for deleting a note
export const DELETE_NOTE = "Delete Note";

// ===============================
// 🔸 Step 2: Create Action Creators
// ===============================
// Action creators are functions that return an action object.
// Each action object must contain a 'type' and may include additional data (payload).

/**
 * Action Creator to add a new note
 * @param {string} text - The content/text of the note to add
 * @returns {object} - Action object with type and payload (text)
 *
 * Example output:
 * {
 *   type: "Add Note",
 *   text: "This is my new note"
 * }
 */
export const addNote = (text) => ({
  type: ADD_NOTE, // Type tells reducer what action to perform
  text, // The new note’s content (payload)
});

/**
 * Action Creator to delete a note
 * @param {number} index - The position/index of the note in the notes array
 * @returns {object} - Action object with type and payload (index)
 *
 * Example output:
 * {
 *   type: "Delete Note",
 *   index: 2
 * }
 */
export const deleteNote = (index) => ({
  type: DELETE_NOTE, // Action type to trigger note deletion
  index, // Index of the note to delete
});
