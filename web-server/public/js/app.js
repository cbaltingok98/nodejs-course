console.log('Client side js file is loaded')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

fetch('http://localhost:3000/weather?address=!').then((response) => {
    response.json().then((data) => {
        if(data.error) {
            console.log(data.error)
        } else {
            console.log(data.location)
            console.log(data.foreCast.temperature)
        }
    })
})

// fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/boston.json?access_token=pk.eyJ1IjoiY2JhbHRpbmdvayIsImEiOiJja2I4bjE3dWQwNXQ0MnlwMHZldXdzdXk3In0.luPlQYgAemE8UJAK7sQa2Q&limit=1').then((response) => {
//     response.json().then((data) => {
//         let latitude = data.features[0].center[1]
//         let longitude = data.features[0].center[0]
//         fetch('http://api.weatherstack.com/current?access_key=8d9b132b9103a5862a0697f21c45a0a5&query=' + latitude + ',' + longitude +',&units=m').then((response2) => {
//             response2.json().then((data2) => {
//                 console.log(data2.current.temperature)
//             })
//         })
//     })
// })