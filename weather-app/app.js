const request = require('request');
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

function init() {
    if (process.argv[2]) {
        geocode(process.argv[2], (error, {latitude, longitude, location}) => {
            if (error) {
               return  console.log(error);
            }
            forecast(latitude,longitude,(error, forecastData) => {
                if (error) {
                    return  console.log(error);
                 }
                console.log(location);
                console.log(forecastData);
            })
        })
    } else {
        console.log('Please provide a location or address');
    }
}

init();