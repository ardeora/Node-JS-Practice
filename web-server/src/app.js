const express = require('express');
const app = express();

console.log(__dirname);
console.log(__filename);

app.get('', (req, res) => {
    res.send('Hello, Express!');
})

app.get('/help', (req, res) => {
    res.send('This is the Help Page!');
})

app.get('/about', (req, res) => {
    res.send('This is the About Page!');
})

app.get('/weather', (req, res) => {
    res.send('This is the Weather Page!');
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
})
