// const redux = require("redux");

// import * as redux from "redux";
// import { combineReducers } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
// import { noteReducer } from "./reducers/noteReducer";
// import {todoReducer} from "./reducers/todoReducer";
// import {notificationReducer} from './reducers/notificationReducer';

// // const result = combineReducers({
// //     todoReducer,
// //     noteReducer
// // })

// export const store = configureStore({
//     reducer:{
//         todoReducer,
//         noteReducer,
//         notificationReducer
//     }
// })

// ============================================================
// 📄 store.js
// ============================================================
// This file creates and configures the Redux store for the app.
// The Redux store holds the entire state tree of your application.
// You should only have one store in a Redux app.
// ============================================================

// Import the `configureStore` method from Redux Toolkit
// This function simplifies store creation and automatically adds
// good default settings like Redux DevTools and middleware setup.
import { configureStore } from "@reduxjs/toolkit";

// Import all reducers (state slices) from your app
import { noteReducer } from "./reducers/noteReducer"; // Manages notes (Note Keeper)
import { todoReducer } from "./reducers/todoReducer"; // Manages todos (To Do App)
import { notificationReducer } from "./reducers/notificationReducer"; // Manages notification messages

// ============================================================
// 🧠 (Optional) Old Redux Method — combineReducers()
// ============================================================
// In plain Redux, you had to manually combine reducers using
// `combineReducers()` and then create the store using `createStore()`.
// Redux Toolkit automates this process with a much cleaner API.
//
// Example of old way:
//
// import { combineReducers, createStore } from "redux";
// const result = combineReducers({
//   todoReducer,
//   noteReducer
// });
// export const store = createStore(result);
// ============================================================

// ============================================================
// ⚙️ Step 1: Configure the Store
// ============================================================
// `configureStore()` automatically sets up:
// - Combined reducers
// - Redux DevTools support (for debugging)
// - Middleware like thunk (for async actions)
// - Better error handling

export const store = configureStore({
  // The `reducer` field is an object where keys represent slice names,
  // and values are the corresponding reducer functions.
  reducer: {
    todoReducer, // Handles the state and actions of To-Do tasks
    noteReducer, // Handles the state and actions of Notes
    notificationReducer, // Handles notifications (e.g., "Todo is created")
  },
});

// ============================================================
// 🧩 Step 2: Using the Store
// ============================================================
// Once the store is created, you provide it to your React app using
// the `<Provider>` component from `react-redux`.
//
// Example:
//
// import { Provider } from "react-redux";
// import { store } from "./redux/store";
//
// function App() {
//   return (
//     <Provider store={store}>
//       <AppRoutes />  // or your main component
//     </Provider>
//   );
// }
//
// Now, any component can access or modify the global state using
// hooks like `useSelector()` and `useDispatch()`.
// ============================================================

// ✅ Summary:
// - Redux Toolkit’s `configureStore` simplifies setup.
// - Each slice reducer (todoReducer, noteReducer, etc.) manages its own part of state.
// - The store combines them automatically.
// - Your entire app can now use Redux hooks to manage state easily.
// ============================================================
