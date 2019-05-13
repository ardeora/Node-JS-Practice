const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define Paths for Express config
const publicDir = path.join(__dirname, '../public');
const viewsDir =  path.join(__dirname, '../templates/views');
const partialsDir = path.join(__dirname, '../templates/partials');

// Setup Handlebars
app.set('views', viewsDir);
app.set('view engine', 'hbs');
hbs.registerPartials(partialsDir);

// Setup Static Directory
app.use(express.static(publicDir));

app.get('/weather', (req, res) => {
    res.render('weather/index', {
        title: 'Yoooooooooo This Bitch Working!'
    });
})
app.listen(3000, () => {
    console.log('Server running on port 3000');
})
