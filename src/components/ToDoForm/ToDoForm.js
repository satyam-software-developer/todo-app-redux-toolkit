// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import {addTodo} from "../../redux/actions/todoActions";
// import { actions } from "../../redux/reducers/todoReducer";

// import styles from "./ToDoForm.module.css";
// import { notificationSelector, resetNotification } from "../../redux/reducers/notificationReducer";

// function ToDoForm() {
//   const [todoText, setTodoText] = useState("");
//   const dispatch = useDispatch();
//   const message = useSelector(notificationSelector)

//   if(message){
//     setTimeout(()=>{
//       dispatch(resetNotification());
//     }, 3000);
//   }

//   const handleSubmit = (e) =>{
//     e.preventDefault();
//     setTodoText("");
//     dispatch(actions.add(todoText));
//   };

//   return (
//     <div className={styles.container}>
//       {
//         message &&
//         <div class="alert alert-success" role="alert">
//           {message}
//         </div>
//       }

//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         className="form-control mb-3"
//         value={todoText}
//         onChange={(e) => setTodoText(e.target.value)}
//       />
//       <button className="btn btn-success float-end" type="submit">Create Todo</button>
//     </form>
//     </div>
//   );
// }

// export default ToDoForm;

// Importing necessary React and Redux hooks
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Importing Redux actions from the todo reducer
import { actions } from "../../redux/reducers/todoReducer";

// Importing styles from CSS Module for scoped styling
import styles from "./ToDoForm.module.css";

// Importing notification state and reset action
import {
  notificationSelector,
  resetNotification,
} from "../../redux/reducers/notificationReducer";

// Functional component to handle adding new To-Do items
function ToDoForm() {
  // Local state to store the current input text
  const [todoText, setTodoText] = useState("");

  // Initialize Redux hooks
  const dispatch = useDispatch();
  const message = useSelector(notificationSelector); // Gets success message from Redux state

  // If a message exists, reset it automatically after 3 seconds
  if (message) {
    setTimeout(() => {
      dispatch(resetNotification());
    }, 3000);
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    // If input is empty, do nothing
    if (!todoText.trim()) return;

    // Dispatch action to add a new todo
    dispatch(actions.add(todoText));

    // Clear input field after submission
    setTodoText("");
  };

  return (
    // Outer container with CSS module styling
    <div className={styles.container}>
      {/* Display success alert message if present */}
      {message && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}

      {/* To-Do input form */}
      <form onSubmit={handleSubmit}>
        {/* Input field for entering to-do text */}
        <input
          type="text"
          className="form-control mb-3" // Bootstrap form styling
          placeholder="Enter your task here..."
          value={todoText} // Controlled input
          onChange={(e) => setTodoText(e.target.value)} // Update state as user types
        />

        {/* Submit button to create a new To-Do */}
        <button className="btn btn-success float-end" type="submit">
          Create Todo
        </button>
      </form>
    </div>
  );
}

// Exporting the component to be used elsewhere
export default ToDoForm;
