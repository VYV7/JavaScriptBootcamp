const todos = [
    {
        text: 'Order cat food',
        completed: false
    },
    {
        text: 'Clean kitchen',
        completed: true
    },
    {
        text: 'Buy food',
        completed: true
    },
    {
        text: 'Do work',
        completed: false
    },
    {
        text: 'Exercise',
        completed: true
    }
]
// console.log(`You have ${todos.length} TODOs`)
console.log(todos)

// deleting an item
const deleteTodo = function (todos, searched)
{
    const index = todos.findIndex(function(item){
        return item.text.toLowerCase() === searched.toLowerCase()
    })
    if (index > -1)
    {
        todos.splice(index, 1)
    }
}

// filtering a list - returns a subset of an array
const getThingsTodo = function (todos){
    return todos.filter(function (todos){
        return !todos.completed
    })
}

// sorting
const sortTodos = function (todoList)
{
    todoList.sort(function (a, b)
    {
        if (!a.completed && b.completed)
        {
            return -1
        }
        else if (a.completed && !b.completed)
        {
            return 1
        }
        else
        {
            return 0
        }
    })
}
sortTodos(todos)
console.log(todos)

// // delete the third item
// todos.splice(2, 1)
// console.log(todos)

// // add a new item onto the end
// todos.push('Last item')
// console.log(todos)

// // remove the first item from the list
// todos.shift()
// console.log(todos)

// // remove the last item from the list
// todos.pop()
// console.log(todos)

// forEach: 1. item, 2. item etc.
// todos.forEach(function (item, index)
// {
//     console.log(`${index+1}. ${item}`)
// })

// challenge
//1. convert array to array of objects: text, completed
//2. create a function to remove a todo by text value

// deleteTodo(todos, 'buy FOOD')
// console.log(todos)

