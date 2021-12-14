export default class NotesAPI {
    static getAllNotes() { // get all notes form the localStorage if they exist, otherwise return empty array
        const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");

        // sort the notes according to the latest Date
        return notes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }

    // save the new note or updated note and add to the localStorage
    static saveNote(noteToSave) {
        const notes = NotesAPI.getAllNotes();
        const existing = notes.find(note => note.id == noteToSave.id); //find if the note you are writing exists

        // Edit/Update a note
        if (existing) {
            existing.title = noteToSave.title;
            existing.body = noteToSave.body;
            existing.updated = new Date().toISOString();
        } else {
            noteToSave.id = Math.floor(Math.random() * 1000000); // give a random number for the noteID
            noteToSave.updated = new Date().toISOString(); // update the Date of the note
            notes.push(noteToSave); 
        }

        localStorage.setItem("notesapp-notes", JSON.stringify(notes)); //store to the localStorage
    }

    // delete the note
    static deleteNote(id) {
        const notes = NotesAPI.getAllNotes();
        const newNotes = notes.filter(note => note.id != id); // filter out the note

        localStorage.setItem("notesapp-notes", JSON.stringify(newNotes)); // update localStorage by pushing the update noteList
    }
}
