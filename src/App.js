// import { Fragment } from "react";
// import { Provider } from "react-redux";
// import TodoForm from "./components/ToDoForm/ToDoForm";
// import TodoList from "./components/ToDoList/ToDoList";
// import {store} from "./redux/store";
// import {BrowserRouter, Routes, Route} from "react-router-dom";

// import './App.css';
// import NoteForm from "./components/NoteForm/NoteForm";
// import NoteList from "./components/NoteList/NoteList";
// import Home from "./components/Home/Home";
// import NavBar from "./components/NavBar/NavBar";

// function App() {
//   return (
//     <div>
//       <Provider store={store}>
//         <BrowserRouter>
//         <Routes>
//           <Route path="" element={<Home />}>

//           </Route>
//           <Route path="todo"
//           element={
//             <Fragment>
//               <NavBar />
//              <h1>To Dos</h1>
//               <TodoForm  />
//               <TodoList />
//             </Fragment>
//           }>

//           </Route>
//           <Route path="notes"
//           element={
//             <Fragment>
//                <NavBar />
//                <h1>Notes</h1>
//               <NoteForm  />
//               <NoteList />
//             </Fragment>
//           }>

//             </Route>
//         </Routes>

//         </BrowserRouter>
//       </Provider>
//     </div>
//   );
// }

// export default App;

// ============================================================
// 📄 App.js
// ============================================================
// This is the main entry point of your React app’s component tree.
// It sets up the Redux provider, React Router routes, and connects
// all components (ToDo App + Note Keeper) together.
// ============================================================

// React core imports
import { Fragment } from "react"; // Allows grouping multiple elements without an extra <div>

// Redux imports
import { Provider } from "react-redux"; // Makes the Redux store available to the entire app
import { store } from "./redux/store"; // Importing the configured Redux store

// React Router imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
// BrowserRouter manages client-side routing
// Routes defines all paths
// Route defines each individual page/component route

// Component imports
import TodoForm from "./components/ToDoForm/ToDoForm"; // Form to add new todo items
import TodoList from "./components/ToDoList/ToDoList"; // List to display existing todos
import NoteForm from "./components/NoteForm/NoteForm"; // Form to add new notes
import NoteList from "./components/NoteList/NoteList"; // List to display notes
import Home from "./components/Home/Home"; // Home screen with navigation links
import NavBar from "./components/NavBar/NavBar"; // Navigation bar for the app

// Importing global CSS
import "./App.css"; // Contains basic global styles for the app

// ============================================================
// 🧠 App Component Definition
// ============================================================
// The App component wraps all routes and provides access to
// global state (Redux store) and navigation (React Router).
// ============================================================

function App() {
  return (
    // Root container of the application
    <div>
      {/* 
        ✅ Provider wraps the entire application
        and connects it to the Redux store.
        Any component inside can now use `useSelector` and `useDispatch`
      */}
      <Provider store={store}>
        {/* 
          ✅ BrowserRouter enables navigation between pages
          without reloading the browser.
        */}
        <BrowserRouter>
          {/* 
            ✅ Routes component contains all your route definitions.
            Each Route maps a URL path to a component or page.
          */}
          <Routes>
            {/* 
              🏠 Route 1: Home Page
              - Displays links to both "To Do App" and "Note Keeper"
              - Path: "/"
            */}
            <Route path="" element={<Home />} />

            {/* 
              ✅ Route 2: To Do Page
              - Path: "/todo"
              - Renders NavBar, ToDoForm, and ToDoList components
              - Wrapped in <Fragment> to avoid unnecessary <div>
            */}
            <Route
              path="todo"
              element={
                <Fragment>
                  <NavBar /> {/* Common navigation bar */}
                  <h1>To Dos</h1> {/* Page heading */}
                  <TodoForm /> {/* Form to create a new todo */}
                  <TodoList /> {/* Display list of todos */}
                </Fragment>
              }
            />

            {/* 
              ✅ Route 3: Notes Page
              - Path: "/notes"
              - Renders NavBar, NoteForm, and NoteList components
              - Also wrapped in <Fragment>
            */}
            <Route
              path="notes"
              element={
                <Fragment>
                  <NavBar /> {/* Common navigation bar */}
                  <h1>Notes</h1> {/* Page heading */}
                  <NoteForm /> {/* Form to create a new note */}
                  <NoteList /> {/* Display list of notes */}
                </Fragment>
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

// Exporting the App component so it can be used in index.js
export default App;

// ============================================================
// 📘 Summary of App.js
// ============================================================
// ✅ Redux store is provided globally via <Provider>
// ✅ React Router handles page navigation
// ✅ Three main routes:
//    - "/" (Home): navigation to sub-apps
//    - "/todo": ToDo management
//    - "/notes": Note keeping
// ✅ Uses reusable <NavBar> and modular components
// ✅ Clean structure with fragments and route-based rendering
// ============================================================
