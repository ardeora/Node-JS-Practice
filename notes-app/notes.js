const fs = require('fs');
const chalk = require('chalk');

function addNote(title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);
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

function removeNote(title) {
  const notes = loadNotes();
  const deletedNotes = notes.filter((note) => title !== note.title);
  if (notes.length === deletedNotes.length) {
    console.log(chalk.bgRed('No note with the title exists'));
  } else {
    saveNotes(deletedNotes);
    console.log(chalk.black.bgGreen('Note Deleted!'));
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

function listNotes() {
  const notes = loadNotes();
  console.log(chalk.bgBlue.black('Listing All Notes'));
  notes.forEach(note => console.log(note.title));
}

function readNotes(title) {
  const notes = loadNotes();
  const reqNote = notes.find((note) => note.title == title);

  if (reqNote) {
    console.log(chalk.blue.inverse(reqNote.title));
    console.log(reqNote.body);
  } else {
    console.log(chalk.red.inverse('No Note With That Title Exists!'));
    
  }
}

module.exports = {addNote, removeNote, listNotes, readNotes};
