// Section 4 Lecture 16

// Using yargs to simplify user input parsing
const yargs = require('yargs');
const notes = require('./notes.js');

// Creating an add note command
yargs.command({
  command: 'add',
  describe: 'Adds a new note',
  // Builder lists all the arguments for the handler function
  builder: {
    title: {
      describe: 'Title of the note',
      // demandOption makes the argument required
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Body of the Note',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv){
    notes.addNote(argv.title, argv.body)
  }
});

// Creating a remove note function
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Title of the note you want to remove',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv){
    notes.removeNote(argv.title);
  }
});

// Creating a list note function
yargs.command({
  command: 'list',
  describe: 'Lists all the notes',
  handler: function(){
    console.log('Listing all nodes');
  }
});

// Creating a remove note function
yargs.command({
  command: 'read',
  describe: 'Reads a note',
  handler: function(){
    console.log('Reading a note!');
  }
});

yargs.parse()
