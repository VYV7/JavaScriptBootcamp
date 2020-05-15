// HTTP - Hypertext Transfer Protocol


let puzzelEl = document.querySelector('#puzzle')
let guessesLeftEl = document.querySelector('#numGuesses')
const game1 = new Hangman('Car parts', 2)

puzzelEl.textContent = 'Puzzle: ' + game1.puzzle
guessesLeftEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) =>  // this takes time
{
    const guess = e.key
    game1.makeGuess(guess)

    puzzelEl.textContent = 'Puzzle: ' + game1.puzzle
    guessesLeftEl.textContent = game1.statusMessage

})

// passing a callback function to a functon as an argument - asynchronous
getPuzzle("2", (error, puzzle) => 
{
    if (error) console.log(`Error: ${error}`)
    else console.log(puzzle) 
})       

// // challange area =============================================================
getCountry("US", (error, countryDetails) =>
{
    if (error) console.log(`Error: ${error}`)
    else console.log(`Country name: ${countryDetails.name}`)
})




