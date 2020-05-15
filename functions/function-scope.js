// Global scope (convFtoC, tempOne, tempTwo)
  // Local scope (fahrenheit, celsius)
    // local scope (isFrezzing)


// convertFtoC
let convFtoC = function(fahrenheit)
{
    let celcius = (fahrenheit - 32) * (5/9)

    if (celcius <= 0)
    {
        let isFrezzing = true
    }

    return celcius
}

let tempOne = convFtoC(32)
let tempTwo = convFtoC(68)

console.log(tempOne)
console.log(tempTwo)