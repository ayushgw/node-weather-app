const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/3613fa883e179cb6cd4bcd9a2d064e07/' + lat + ',' + long + '?units=si'

    request({ url, json: true }, (error, { body: response }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        }
        else if (response.error) {
            callback('Unable to find location!', undefined);
        } else {
            const res = response;
            callback(undefined, res.daily.data[0].summary + ' It is currently ' + res.currently.temperature + ' degrees out. There is a ' + res.currently.precipProbability + '% chance of rain.');
        }
    })
}

module.exports = forecast;