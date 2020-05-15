// multiple arguments
let add = function (a, b, c)
{
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// default arguments
let getScoreText = function (name = 'Anonymous', score = 0)
{
    //return 'Name: ' + name + ' - Score: ' + score
    // template string
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 88)
console.log(scoreText)

// Challenge area
let calc = function (total, tipPercent = .2)
{
    if (total === undefined)
    {
        return 'Please, provide the total'
    }
    else
    {
        let tip = total * tipPercent
        let percent = tipPercent * 100
        return `A ${percent}% on $${total} would be $${tip}` 
    }
}

console.log(calc(80))
