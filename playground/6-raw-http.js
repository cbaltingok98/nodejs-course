const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=8d9b132b9103a5862a0697f21c45a0a5&query=Pleasant%20Hill&units=m'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()        
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()