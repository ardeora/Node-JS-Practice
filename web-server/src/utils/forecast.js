const request = require('request');

function forecast(lat, long, callback) {
    const forecastURL = `https://api.darksky.net/forecast/76b16265075b83074a44035625b24e92/${lat},${long}?units=si`;
    request({url: forecastURL, json: true}, (error, {body}) => {
            if (error) {
                callback('Unable to connect to weather services!',undefined);
            } else if(body.error) {
                callback('Location Information Incorrect!',undefined);
            } else {
                const currently = body.currently;
                callback(undefined,`${body.daily.data[0].summary} ${currently.icon}. It is currently ${currently.temperature} degrees out. There is a ${currently.precipProbability * 100}% chance of rain.`);
            } 
        })
}

module.exports = forecast;