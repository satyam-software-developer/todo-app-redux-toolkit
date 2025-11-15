
// import styles from "./NavBar.module.css";

// function NavBar(){
//     return(
//         <nav class="navbar navbar-expand-lg bg-body-tertiary">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="/">Utility Apps</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className={styles.navitem}>
//           <a class="nav-link active" aria-current="page" href="todo">To Do</a>
//         </li>
//         <li className={styles.navitem}>
//           <a class="nav-link active" aria-current="page" href="notes">Note</a>
//         </li> 
//       </ul>
//     </div>
//   </div>
// </nav>
//     );
// }

// export default NavBar;

// Importing CSS module for custom styles specific to the NavBar component.
// This allows scoped styling — class names are automatically made unique.
import styles from "./NavBar.module.css";

// Functional component named NavBar — defines the navigation bar.
function NavBar() {
  return (
    /* 
      Bootstrap navbar component:
      - 'navbar' → applies base navbar styling.
      - 'navbar-expand-lg' → makes the navbar responsive (collapses on smaller screens).
      - 'bg-body-tertiary' → gives it a light gray background.
    */
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        
        {/* 
          Navbar brand:
          - Serves as a title/logo for your app.
          - 'href="/" ' navigates back to the homepage.
        */}
        <a className="navbar-brand" href="/">Utility Apps</a>

        {/* 
          Navbar toggle button (for small screens):
          - Appears when the screen width is small.
          - 'data-bs-toggle="collapse"' and 'data-bs-target' enable Bootstrap's JS functionality
            to show/hide the menu items.
        */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* This span displays the default Bootstrap hamburger icon */}
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 
          Collapsible section that holds the nav links.
          - 'collapse navbar-collapse' works with the toggler above.
          - The id must match 'data-bs-target' for the toggling to work.
        */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          {/* 
            Unordered list to hold navigation links.
            - 'navbar-nav' → base nav styling from Bootstrap.
            - 'me-auto' → pushes items to the left.
            - 'mb-2 mb-lg-0' → controls spacing.
          */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {/* 
              Each list item contains a navigation link.
              The 'styles.navitem' applies your custom styling from CSS modules.
            */}
            <li className={styles.navitem}>
              {/* 
                'nav-link active' → Bootstrap link styling.
                'href="todo"' → navigates to the To Do App page.
              */}
              <a className="nav-link active" aria-current="page" href="todo">
                To Do
              </a>
            </li>

            <li className={styles.navitem}>
              {/* 
                Another link to the Note Keeper page.
                Maintains consistent styling.
              */}
              <a className="nav-link active" aria-current="page" href="notes">
                Note
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

// Exporting NavBar as default so it can be imported in other components (like App.js).
export default NavBar;
