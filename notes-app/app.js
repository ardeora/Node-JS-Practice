const fs = require('fs');

// fs.writeFileSync('notes.txt', 'This file was created by node.js');
fs.appendFileSync('notes.txt', 'This file was appended by the appendFileSync Function');
