const request = require('request');

function geocode(address, callback) {
    const apiKey = 'Your API KEY Here';
    const geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`
    request({url: geocodeURL, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!',undefined);     
        } else if(body.status !== 'OK') {
            callback('Location Information Incorrect! (mapbox)', undefined);
        } else {
            let addressComponent = body.results[0].address_components;
            let locationStore = 'Location Not Found';
            addressComponent.forEach(component => {
                if (component.types.includes('locality')) {
                    locationStore = component.long_name;
                }
            });
            callback(undefined, {
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng,
                location: locationStore
            });
        }
    })
}

module.exports = geocode;