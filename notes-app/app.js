const notes = require('./notes');
const chalk = require('chalk');

console.log(chalk.bold.black.bgGreen('Success!'));
console.log(chalk.bold.rgb(15, 100, 204).inverse('Hello!'));
console.log(notes.name);
console.log(notes.add(2,3));
