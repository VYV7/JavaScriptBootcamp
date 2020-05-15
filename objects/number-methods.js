let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))


let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

// 0 - 0.999999
console.log(randomNum)

// challenge area

// 1 - 5 - true if correct - false if not correct
let makeGuess = function (number)
{
    
    let min = 1
    let max = 5
    let randNum = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(randNum)

    return randNum === number
}

console.log(makeGuess(1))