// model of a book
let myBook = {
    // properties of a book
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// challenge area
// name, age, location

let person = {
    name: 'Andrew',
    age: 27,
    location: 'Philadelphia'
}

console.log(`${person.name} is ${person.age} years old and lives in ${person.location}.`)
person.age = person.age + 1
console.log(`${person.name} is ${person.age} years old and lives in ${person.location}.`)
