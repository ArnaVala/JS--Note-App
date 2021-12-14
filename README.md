# Take Note - note taking SPA in vanilla JS.

## JavaScript in the Browser - Common Web API's

[Live site]()

## Requirements

### SPA: a Single Page Application in Vanilla JavaScript.

- 2 pages, all contents in the same index.html
- Navigation between the pages using hash
- Using _History API_ to push new state (new page) to the DOM and change the URL.
- Storing data in the _localStorage_, and retrieving it on next visit.

## Project - A Note taking app

- History API handles navigation between pages, code found in the js/spa.js file.
  You can navigate between home and my notes, without changing pages.
- The project is built with js modules to handle the Note taking page.
- The NotesAPI.js holds the localStorage functions, to store and remove the notes from the localstorage.
- The NotesView.js creates, edit the notes that are injected into the root element for the notes.
- The NotesAPI and NoteView are imported into the NotePage.js where the two are connected, so when we create or edit, it does so accordingly in the localStorageAPI.
- The NotePage.js is then imported into the main.js which is attached to the index.html. There I specify the root element into which to inject the HTML.

<br>
- Styling with SASS
- Space Grotesk font from Google fonts.
- I did CSS animations, with keyframes and transitions, with a little help from JS.
(I used this same project for the MODULE 4 - HTML & CSS - Animating and Transforming for the module 4 project - animation in CSS)
