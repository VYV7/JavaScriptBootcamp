'use strict'
// DOM - Document Object Model

// load saved data
let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

// render todos
renderTodos(todos, filters)

// LISTENERS ==================================================================
// text box
document.querySelector('#search-text').addEventListener('input', (e) =>
{
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})
// form -  add note
document.querySelector('#todo-form').addEventListener('submit', (e) =>
{
    e.preventDefault()

    todos.push(
    {
        id: uuidv4(),
        text: e.target.elements.newTodo.value,
        completed: false
    })

    e.target.elements.newTodo.value = ''                    // clear textbox

    saveTodos(todos)
    renderTodos(todos, filters)
})
// checkbox - hide completed
document.querySelector('#hide-completed').addEventListener('change', (e) =>
{
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})
//=============================================================================
