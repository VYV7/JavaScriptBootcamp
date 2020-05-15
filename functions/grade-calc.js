// student score, total possible score
// 15/20 -> you got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const calcGrade = function (points, maxPoints = 100)
{
    // check arguments
    if (typeof points !== 'number' || typeof maxPoints !== 'number')
    {
        throw Error('Please, provide numbers')
    }

    const percent = points / maxPoints * 100
    let letterGrade = ''

    if (percent <= 100 && percent >= 90)
    {
        letterGrade = 'A'
    }
    else if (percent >= 80)
    {
        letterGrade = 'B'
    }
    else if (percent >= 70)
    {
        letterGrade = 'C'
    }
    else if (percent >= 60)
    {
        letterGrade = 'D'
    }
    else
    {
        letterGrade = 'F'
    }

    return `You got a ${letterGrade} (${percent}%)`
}

try
{
    // const result = calcGrade(true, 50)
    const result = calcGrade(34, 50)
    console.log(result)
}
catch(e)
{
    console.log(e.message)
}