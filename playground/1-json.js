const fs = require('fs');

// Read File Sync reads the buffer data of the file
const dataBuffer = fs.readFileSync('1-json.json');
// Convert bufferData to string
const dataJSON = dataBuffer.toString();
let data = JSON.parse(dataJSON);


data.name = "Aryan";
data.age = 21;

const updatedJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json', updatedJSON);


// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// }
//
// fs.writeFileSync('1-json.json', JSON.stringify(book));

// // Convert object to JSON with stringify
// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);
//
// // Convert JSON to objects with parse
// const bookParsed = JSON.parse(bookJSON);
// console.log(bookParsed);
