const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

console.log(notes)

// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift())
// notes.unshift('My first note')

// notes.splice(1, 1, 'This is a new second item')

// notes[2] = 'This is now the new note 3'

// callback function - arguments: item, index
// notes.forEach(function (item, index) 
// {
//     console.log(index)
//     console.log(item)
// }
// )

// sorting
const sortNotes = function (notes)
{
    notes.sort(function (a, b) 
    {
        if (a.title.toLowerCase() < b.title.toLowerCase())
        {
            return -1
        }
        else if (a.title.toLowerCase() > b.title.toLowerCase())
        {
            return 1
        }
        else
        {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)

// looking for the item directly
const findNote = function (notes, noteTitle)
{
    return notes.find(function (note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

// filtering
const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

// console.log(findNotes(notes, 'get'))

// looking for index
// const findNote = function (notes, noteTitle)
// {
//     const index = notes.findIndex(function (note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

// const note = findNote(notes, 'office modification')
// console.log(note)

// console.log(notes.length)
// console.log(notes)

// const index = notes.findIndex(function (note, index) {
//     console.log(note)
//     return note.title === 'Habbits to work on'
// })
// console.log(index)