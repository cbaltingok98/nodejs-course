const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added: " + title))
    } else {
        console.log(chalk.red.inverse('Note title taken: ' + title))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const remove = notes.filter((note) => note.title !== title)

    if(remove.length < notes.length){
        console.log(chalk.blue.inverse('Note removed ✅'))
        saveNotes(remove)  
    } else {
        console.log(chalk.red("Note not found"))
    }      
}

const listNotes = () => {
    const notes = loadNotes()

    notes.forEach(note => {
        console.log('Title: ' + chalk.blue.bold(note.title))
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const findNote = notes.find((note) => note.title === title)

    if(findNote){
        console.log(chalk.green('Title: ') + findNote.title)
        console.log(chalk.green('Body: ') + findNote.body)
    } else {
        console.log(chalk.red('Note not found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
    
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}