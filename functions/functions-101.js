// Function - input (argument), code, output (return value)

// definition
let greenUser = function ()
{
    console.log('Welcome user')
}

greenUser()

let square = function (num)
{
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

// challenge area

// convertFtoC
let convFtoC = function(fahrenheit)
{
    let celcius = (fahrenheit - 32) * (5/9)
    return celcius
}
// call a couple of times (32 -> 0) (68 -> 20)
// print the converted values
console.log(convFtoC(32))
console.log(convFtoC(68))