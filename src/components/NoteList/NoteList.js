
// import { useSelector, useDispatch } from "react-redux";
// // import { deleteNote } from "../../redux/actions/noteActions";
// import { actions } from "../../redux/reducers/noteReducer";
// import { noteSelector } from "../../redux/reducers/noteReducer";
// import styles from "./NoteList.module.css";

// function NoteList() {
//     const notes=useSelector(noteSelector);
//     const dispatch=useDispatch();

//   return (
//     <div className="container">
//     <ul>
//       {notes.map((note,index) => (
//         <li className={styles.item}>
//             <p>{note.createdOn.toLocaleDateString()}</p>
//             <p className={styles.notecontent}>{note.text}</p>
//             <button className={"btn btn-danger "+styles.button}
//             onClick={()=> dispatch(actions.delete(index))}>Delete</button>
//             </li>
//       ))}
//     </ul>
//     </div>
//   );
// }

// export default NoteList;



// Import hooks from React Redux for state management.
import { useSelector, useDispatch } from "react-redux";

// Import Redux actions from the noteReducer.
import { actions } from "../../redux/reducers/noteReducer";

// Import selector to read notes from the Redux store.
import { noteSelector } from "../../redux/reducers/noteReducer";

// Import scoped CSS module styles.
import styles from "./NoteList.module.css";

// Functional component to display all saved notes.
function NoteList() {
  // useSelector is used to extract 'notes' state from the Redux store.
  const notes = useSelector(noteSelector);

  // useDispatch provides the dispatch function to trigger Redux actions.
  const dispatch = useDispatch();

  return (
    // Bootstrap container class for horizontal centering and spacing.
    <div className="container">
      {/* Unordered list to hold each note item */}
      <ul className={styles.list}>
        {/* 
          Loop through the notes array and render each note inside a <li> element.
          'index' is used as a key here since notes are simple and likely have no unique ID.
        */}
        {notes.map((note, index) => (
          <li key={index} className={styles.item}>
            {/* Display note creation date */}
            <p className={styles.date}>{note.createdOn.toLocaleDateString()}</p>

            {/* Display note text */}
            <p className={styles.notecontent}>{note.text}</p>

            {/* Delete button to remove a note by its index */}
            <button
              className={`btn btn-danger ${styles.button}`}
              onClick={() => dispatch(actions.delete(index))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Exporting component for use in parent components.
export default NoteList;
