'use strict'
// DOM - Document Object Model
let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

// create #id - select by id
document.querySelector('#create-note').addEventListener('click', (e) =>
{
    const newId = uuidv4()
    const timestamp = moment().valueOf()

    notes.push({
        id: newId,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes)
    location.assign(`/edit.html#${newId}`)
})

// search
document.querySelector('#search-text').addEventListener('input', (e) =>
{
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

// dropdown
document.querySelector('#filter-by').addEventListener('change', (e) =>
{
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

//
window.addEventListener('storage', (e) =>
{
    if (e.key === 'notes')
    {
       notes = JSON.parse(e.newValue)
       renderNotes(notes, filters)
    }
})

// const now = moment()

// now.subtract(1, 'week').subtract(20, 'days')
// console.log(now.format('MMMM Do, YYYY'))
// console.log(now.fromNow())

// const nowTimeStamp = now.valueOf()
// console.log(nowTimeStamp)

const myBirthDay = moment().year(1989).month(3).date(1)

console.log(myBirthDay.format('MMMM D, YYYY'))

