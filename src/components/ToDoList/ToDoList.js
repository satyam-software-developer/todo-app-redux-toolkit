// import { useSelector, useDispatch } from "react-redux";
// // import { toggleTodo } from "../../redux/actions/todoActions";
// import { actions } from "../../redux/reducers/todoReducer";
// import { todoSelector } from "../../redux/reducers/todoReducer";
// import styles from "./ToDoList.module.css";

// function ToDoList() {

//   const todos=useSelector(todoSelector);
//   console.log(todos);
//   const disptach = useDispatch();
//   // const todos= store.getState().todos;

//   return (
//     <div className={styles.container}>
//     <ul>
//       {todos.map((todo,index) => (
//         <li className={styles.item} key={todo.id}>
//           <span className={styles.content}>{todo.text}</span>
//           <span className={todo.completed ? styles.completed:styles.pending}>{todo.completed ? 'Completed': 'Pending'}</span>
//           <button className="btn btn-warning"
//           onClick={()=>{disptach(actions.toggle(index))}}
//           >Toggle</button>
//           </li>
//       ))}
//     </ul>
//     </div>
//   );
// }

// export default ToDoList;

// Import React-Redux hooks to connect the component with the Redux store
import { useSelector, useDispatch } from "react-redux";

// Import all actions from the todoReducer (like toggle, add, delete, etc.)
import { actions, todoSelector } from "../../redux/reducers/todoReducer";

// Import CSS module for scoped, component-specific styles
import styles from "./ToDoList.module.css";

// Functional component to display the list of Todos
function ToDoList() {
  // Access the todos array from Redux state using selector
  const todos = useSelector(todoSelector);

  // Create a dispatch function to send actions to Redux store
  const dispatch = useDispatch();

  // Log todos for debugging in development
  console.log(todos);

  return (
    <div className={styles.container}>
      {/* Render the todo list */}
      <ul className={styles.list}>
        {/* Loop through all todos and render each one */}
        {todos.map((todo, index) => (
          <li className={styles.item} key={todo.id}>
            {/* Todo content */}
            <span className={styles.content}>{todo.text}</span>

            {/* Todo status: Completed / Pending */}
            <span
              className={todo.completed ? styles.completed : styles.pending}
            >
              {todo.completed ? "Completed" : "Pending"}
            </span>

            {/* Toggle button to change todo status */}
            <button
              className={`btn btn-warning ${styles.toggleBtn}`}
              onClick={() => dispatch(actions.toggle(index))}
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>

      {/* If no todos are present, display an empty state message */}
      {todos.length === 0 && (
        <p className={styles.empty}>No todos yet. Add one above!</p>
      )}
    </div>
  );
}

// Exporting the component for use in other parts of the app
export default ToDoList;
