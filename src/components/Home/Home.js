// import styles from "./Home.module.css";

// function Home(){

//     return(
//         <div className={styles.container}>
//             <a href="todo" className={"btn btn-warning "+styles.link}>
//                 To Do App
//             </a>
//             <a href="notes" className={"btn btn-warning "+styles.link}>
//                 Note Keeper
//             </a>
//         </div>
//     )
// }

// export default Home;


// Importing the CSS module for scoped styling.
// The styles object will contain class names that are unique to this component.
import styles from "./Home.module.css";

// Functional component named 'Home' — used to render the homepage UI.
function Home() {

    // The return statement defines what the component will render on the screen.
    return (
        // 'styles.container' refers to a class defined inside 'Home.module.css'.
        // It provides layout or styling for the container div.
        <div className={styles.container}>

            {/* 
                The first <a> tag acts as a button linking to the "To Do App" page.
                - href="todo" → navigates to the Todo route.
                - className combines:
                    1. Bootstrap button classes ('btn', 'btn-warning') for styling.
                    2. A custom CSS module class 'styles.link' for additional styling.
            */}
            <a href="todo" className={"btn btn-warning " + styles.link}>
                To Do App
            </a>

            {/* 
                The second <a> tag links to the "Note Keeper" page.
                - href="notes" → navigates to the Notes route.
                - Uses the same button and custom link styles for consistency.
            */}
            <a href="notes" className={"btn btn-warning " + styles.link}>
                Note Keeper
            </a>
        </div>
    );
}

// Exporting the component as default so it can be imported elsewhere in the project.
export default Home;
