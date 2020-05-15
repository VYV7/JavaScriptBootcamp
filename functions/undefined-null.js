// undefined means that a variable is defined
// but not given a value

// undefined variable
let name

name = 'Peter'

if (name === undefined)
{
    console.log('Please provide a name')
}
else
{
    console.log(name)
}

// undefined for functoin argument
let square = function (num)
{
    console.log(num)
}

let result = square()
console.log(result)

// null as assigned value
let age = 27

age = null

console.log(age)