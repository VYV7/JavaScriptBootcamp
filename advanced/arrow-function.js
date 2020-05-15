// arrow functons

const squareConv = function (num)
{
    return num * num
}

const squareLong = (num) => 
{
    return num * num
}

const square = (num) => num * num

console.log(square(5))

const people = [
    {
        name: 'Andrew',
        age: 27
    },
    {
        name: 'Vikram',
        age: 31
    },
    {
        name: 'Jess',
        age: 22
    }
]

// const under30 = people.filter(function (person)
// {
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age < 30)
console.log(under30)

// challange area

// const age22 = people.filter((person) => person.age === 22) // returns an array with one element
const age22 = people.find((person) => person.age === 22) // return an object
console.log(age22.name)