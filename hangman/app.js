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
getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}, (err) => {
    console.log(`Error: ${err}`)
})       

// challange area =============================================================
getCountry('US').then((countryDetails) => {
    console.log(`Country name: ${countryDetails.name}`)
}, (err) => {
    console.log(`Error: ${err}`)
})




