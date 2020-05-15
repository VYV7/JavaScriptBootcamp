// EDIT WINDOW
'use strict'

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
let dateElement = document.querySelector('#last-edited')

// get the note id from the hash
const noteId = location.hash.substring(1)
// load saved notes
let notes = getSavedNotes()
// check the note id
let note = notes.find((note) => note.id === noteId)
if (!note)      // if note === undefined
{
    location.assign('/index.html')
}

// populating title and body text fields
titleElement.value = note.title
bodyElement.value = note.body
dateElement.textContent = genetateLastEdited(note.updatedAt)

// input event for the title
titleElement.addEventListener('input', (e) =>
{
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = genetateLastEdited(note.updatedAt)
    saveNotes(notes)
})

// input event for the body
bodyElement.addEventListener('input', (e) =>
{
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = genetateLastEdited(note.updatedAt)
    saveNotes(notes)
})

// input event for the remove button
removeElement.addEventListener('click', (e) =>
{
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

// data change event - updates the page if data changes
window.addEventListener('storage', (e) =>
{
    if (e.key === 'notes')
    {
        // load saved notes
        let notes = getSavedNotes()
        // check the note id
        let note = notes.find((note) => note.id === noteId)
        if (!note)      // if note === undefined
        {
            location.assign('/index.html')
        }

        // populating title and body text fields
        titleElement.value = note.title
        bodyElement.value = note.body
        dateElement.textContent = genetateLastEdited(note.updatedAt)
    }
})
