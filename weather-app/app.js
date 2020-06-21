const geocode = require('./utils/geoCode')
const forecast = require('./utils/weatherService')
const chalk = require('chalk')

const userInput = process.argv[2]

if (!userInput) {
    console.log(chalk.red.inverse('Please provide an address!'))
} else {
    geocode(userInput, (error, {location, latitude, longitude} = {}) => {
        if (error) {
            return console.log('Error', error)    
        }    
        forecast(latitude, longitude, (error, {temperature, feels}) => {
            if (error) {
                return console.log('Error', error)
            }        
            console.log('Location: ' + chalk.green(location))
            console.log('Temperatur: ' + chalk.green(temperature))
            console.log('Feels: ' + chalk.green(feels))
        })
    })
}

