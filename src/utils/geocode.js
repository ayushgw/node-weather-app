const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYXl1c2hnb3NpIiwiYSI6ImNqeXEzMWUxdDA5d2IzbXJqZWJ4MzNuYTcifQ.0Mzh3qoHPjcAO8J_riCQ3Q&limit=1'

    request({ url, json: true }, (error, { body: response }) => {
        if (error) {
            callback('Unable to connect to location service!', undefined)
        } else if (response.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            callback(undefined, {
                latitude: response.features[0].center[1],
                longitude: response.features[0].center[0],
                location: response.features[0].place_name
            })
        }
    })
}

module.exports = geocode;