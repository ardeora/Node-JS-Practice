const request = require('request');

function forecast(lat, long, callback) {
    const forecastURL = `https://api.darksky.net/forecast/76b16265075b83074a44035625b24e92/${lat},${long}?units=si`;
    request({url: forecastURL, json: true}, (error, {body}) => {
            if (error) {
                callback('Unable to connect to weather services!',undefined);
            } else if(body.error) {
                callback('Location Information Incorrect!',undefined);
            } else {
                callback(undefined,{
                    timezone: body.timezone,
                    icon: body.currently.icon,
                    temperature: Math.floor(body.currently.temperature)
                });
            } 
        })
}

module.exports = forecast;