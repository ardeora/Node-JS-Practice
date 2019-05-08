const fs = require('fs');

function addNote(title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function(note){
    return note.title === title;
  })
  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body
    });
    saveNotes(notes);
    console.log('New Note Added!');
  } else {
    console.log('Note Title Already Exists!');
  }
}

function saveNotes(notes) {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', notesJSON);
}

function loadNotes() {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}
module.exports = {addNote};
