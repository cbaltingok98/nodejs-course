const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geoCode')
const forecast = require('./utils/weatherService')

const app = express()
const port = process.env.PORT || 3000

//Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')

// Setup handlebars engine and views location // tes
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Berk'
    })
})

app.get('/about', (req, res) => {
    res.render('about',{
        title: 'About Me',
        name: 'Berk'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'Help Page Message',
        title: 'Help',
        name: 'Berk'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }
    geocode(req.query.address, (error, {location, latitude, longitude} = {}) => {
        if (error) {
            return res.send({ error })   
        }    
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }
            res.send({
                foreCast: forecastData,
                location,
                address: req.query.address,
                localTime: forecastData.time
            })
        })
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query.search);
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('notFoundPage', {
        title: '404',
        message: 'Help article not found.',
        name: 'Berk'
    })
})

app.get('*', (req, res) => {
    res.render('notFoundPage', {
        title: '404',
        message: 'Page not found!',
        name: 'Berk'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})