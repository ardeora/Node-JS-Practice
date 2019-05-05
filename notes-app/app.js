// Section 4 Lecture 15

// Learning how to accept user input from the command line
// Like the window object in browsers, Node.js has a process object
// which stores the user input made in the command line

// argv contains all the inputs passed by the user
// console.log(process.argv[2]);

const chalk = require('chalk');
const notes = require('./notes.js');


const command = process.argv[2];

if (command === 'add') {
  console.log('Adding Note!');
} else if (command === 'remove') {
  console.log('Removing Note!');
}

//parsing argv can get tedious and wont be anything that makes our application stand out from other applications.
// For that reasons we will be using yargs node module to parse user inputs
