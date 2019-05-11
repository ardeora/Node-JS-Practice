const request = require('request');

const url = 'https://api.darksky.net/forecast/76b16265075b83074a44035625b24e92/37.8267,-122.4233?units=si';

request({url: url, json: true}, (error, response) => {
    const currently = response.body.currently;
    console.log(`It is currently ${currently.temperature} degrees out. There is a ${currently.precipProbability * 100}% chance of rain.`);
})

const mapBoxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWRlb3JhIiwiYSI6ImNqdmlqdHpnZjA2anU0OW5xeDUxcnJxeWUifQ.Wp2GZaS7WFmWoAHWjtTjyg&limit=1'

request({url: mapBoxUrl, json: true}, (error, response) => {
    console.log(response.body.features[0].center);
})