# Take Note - note taking SPA in vanilla JS.
- Note that I am using this project for both the JS- Common Web API's in Module 3.
and also the HTML&CSS- Animating and Transforming in Module 4.
*Read the info on HTML&CSS further below.*

## JavaScript in the Browser - Common Web API's

[Live site](https://av-spa-notes-app.netlify.app/)

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

## HTML & CSS - ANIMATING AND TRANSFORMING
I decided to use the notes taking app for the animation with CSS project.
### Requirements:
*2 animated elements on their own, or which do not require interaction:*
- I used a keyframe animation on the gradient background.
- For the rotating text I used CSS keyframes for the rotation. I used JS to split the letters and wrap into a circle - code can be found in the js/circle.js.
*Should contain at least 2 animated items which get animated upon some interaction, e.g. pointer :hover or element :focus:*
- I used hover effects for buttons and the cards, used transition and easing for smoother transitions. Used transform with scale on the start-button on the homepage and on the note-cards.


