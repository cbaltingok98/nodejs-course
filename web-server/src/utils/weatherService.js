const request = require('request')

const weather = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=8d9b132b9103a5862a0697f21c45a0a5&query=${encodeURIComponent(lat)},${encodeURIComponent(long)}&units=m`
    
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                location: body.location.name,
                weather: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feels: body.current.feelslike,
                time: body.location.localtime
            })
        }
    })
}

module.exports = weather