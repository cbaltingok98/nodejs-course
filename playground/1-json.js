const fs = require('fs')

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)

// console.log(data.title)

const infoBuffer = fs.readFileSync('1-json.json')
const infoJSON = infoBuffer.toString()
const info = JSON.parse(infoJSON)

info.name = 'Berk'
info.planet = 'Mars'
info.age = '22'

const userInput = JSON.stringify(info)
fs.writeFileSync('1-json.json', userInput)

console.log(info)