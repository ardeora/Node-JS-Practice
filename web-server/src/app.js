const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

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
    if (!req.query.address) {
        return res.render('weather/index', {
            title: 'Yoooooooooo This Bitch Working!'
        });
    }

    geocode(req.query.address, (error, geoData) => {
        if (error) {
            return res.send({
                error: 'Mapbox Error: Could not retrieve coordinates of address'
            })
        } else {
            forecast(geoData.latitude, geoData.longitude, (error, forData) => {
                if (error) {
                    res.send({
                        error: 'Dark Sky Error: Could not retrieve forecast of address'
                    })
                } else {
                    return res.send({
                        forecast: forData,
                        location: geoData.location
                    })
                }
            })
        }
    })
    // res.send({
    //     error: 'Provide an address buddy',
    // })
    
})

app.get('/products', (req, res) => {
    console.log(req.query);
    
    res.send({
        products: []
    });
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
})
