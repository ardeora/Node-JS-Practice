const path = require('path');
const express = require('express');

const app = express();
const publicDir = path.join(__dirname, '../public');


app.set('view engine', 'hbs');
app.use(express.static(publicDir));

app.get('/weather', (req, res) => {
    res.render('weather/index', {
        title: 'Yoooooooooo This Bitch Working!'
    });
})
app.listen(3000, () => {
    console.log('Server running on port 3000');
})
