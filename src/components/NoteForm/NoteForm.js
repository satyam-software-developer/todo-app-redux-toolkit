// import { useState } from "react";
// import { useDispatch } from "react-redux";
// // import { addNote } from "../../redux/actions/noteActions";
// import { actions } from "../../redux/reducers/noteReducer";
// import styles from "./NoteForm.module.css";

// function NoteForm() {
//   const [noteText, setNoteText] = useState("");
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(actions.add(noteText))
//     setNoteText("");
//   };

//   return (
//     <div className={styles.noteContainer}>

//     <form onSubmit={handleSubmit}>
//       <textarea
//         type="text"
//         className="form-control mb-3"
//         value={noteText}
//         onChange={(e) => setNoteText(e.target.value)}
//       />
//       <button className="btn btn-success float-end" type="submit">Create Note</button>
//     </form>
//     </div>
//   );
// }

// export default NoteForm;

// Importing useState hook to manage local input state.
import { useState } from "react";

// Importing useDispatch hook to send actions to the Redux store.
import { useDispatch } from "react-redux";

// Importing all actions from the note reducer file.
import { actions } from "../../redux/reducers/noteReducer";

// Importing CSS module for scoped styling specific to this component.
import styles from "./NoteForm.module.css";

// Functional component for adding new notes.
function NoteForm() {
  // Local state variable to store the text entered by the user in the textarea.
  const [noteText, setNoteText] = useState("");

  // Getting the dispatch function to send Redux actions.
  const dispatch = useDispatch();

  // Handle form submission.
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission.

    // Dispatch Redux action to add a new note with the entered text.
    dispatch(actions.add(noteText));

    // Clear the textarea after submission.
    setNoteText("");
  };

  // JSX (UI part) returned by the component.
  return (
    // Outer container div for styling the note form area.
    <div className={styles.noteContainer}>
      {/* Form to handle new note input */}
      <form onSubmit={handleSubmit}>
        {/* Textarea for note content input */}
        <textarea
          type="text"
          className="form-control mb-3" // Bootstrap styling for input appearance.
          placeholder="Write your note here..." // Placeholder text for guidance.
          value={noteText} // Controlled component binding.
          onChange={(e) => setNoteText(e.target.value)} // Updates noteText as user types.
          rows="4" // Set visible height of the textarea.
        />

        {/* Submit button to create the note */}
        <button className="btn btn-success float-end" type="submit">
          Create Note
        </button>
      </form>
    </div>
  );
}

// Exporting the component to be used in other files.
export default NoteForm;
