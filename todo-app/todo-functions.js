'use strict'
// functions

// load saved data ------------------------------------------------------------
const getSavedTodos = () =>
{
    const todosJSON = localStorage.getItem('todos')

    try
    {
        return todosJSON ? JSON.parse(todosJSON) : []  // todosJSON !== null
    }
    catch
    {
        return []
    }
}
//-----------------------------------------------------------------------------

// save to localStorage -------------------------------------------------------
const saveTodos = (todos) =>
{
    localStorage.setItem('todos', JSON.stringify(todos))
}
//-----------------------------------------------------------------------------

// render application todos based on filters ----------------------------------
const renderTodos = (todos, filters) =>
{
    // filter todos - creates a new list
    const filteredTodos = todos.filter((todo) =>
    {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        // const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        const hideCompletedMatch = !(filters.hideCompleted && todo.completed)

        return searchTextMatch && hideCompletedMatch
    })

    // create a new array with incomplete todos - creates a new list
    const incompleteTodos = filteredTodos.filter((item) => !item.completed)

    // clear #todos div and print the summary
    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    // print filtered todos (form)
    filteredTodos.forEach((item) =>
    {
        document.querySelector('#todos').appendChild(generateTodoDOM(item))
    })
}
//-----------------------------------------------------------------------------

// remove Todo ----------------------------------------------------------------
const removeTodo = (id) =>
{
    const index = todos.findIndex((todo) => todo.id === id)

    if (index > -1)
    {
        todos.splice(index, 1)
    }
}
//-----------------------------------------------------------------------------

//  toggle completed ----------------------------------------------------------
const toggleTodo = (id) =>
{
    const todo = todos.find((todo) => todo.id === id)

    if (todo)     // todo !== undefined
    {
        todo.completed = !todo.completed
    }
}
//-----------------------------------------------------------------------------

// genetate todo DOM - one div with a text ------------------------------------
const generateTodoDOM = (item) =>
{
    const TodoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const text = document.createElement('span')
    const removeButton = document.createElement('button')
    // checkbox - completed
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = item.completed
    TodoEl.appendChild(checkbox)
    checkbox.addEventListener('change', () =>
    {
        toggleTodo(item.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    // text
    text.textContent = item.text
    TodoEl.appendChild(text)
    // button - remove
    removeButton.textContent = 'Remove'
    TodoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () =>
    {
        removeTodo(item.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    console.log(text.textContent)
    return TodoEl
}
//-----------------------------------------------------------------------------

// generate summary text ------------------------------------------------------
const generateSummaryDOM = (incompleteTodos) =>
{
    const text = document.createElement('h2')
    text.textContent = `You have ${incompleteTodos.length} todos left`
    return text
}
//-----------------------------------------------------------------------------