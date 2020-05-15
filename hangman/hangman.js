class Hangman 
{
    constructor(word, numGuesses)
    {
        this.word = word.toLowerCase().split('')
        this.guessed = []
        this.numGuesses = numGuesses
        this.status = "playing"
    }
    calcStatus()
    {
        const finished = this.word.every((letter) =>
        {
            return this.guessed.includes(letter) || letter === ' '
        })
    
        if (this.numGuesses === 0)
            this.status = 'failed'
        else if (finished)
            this.status = 'finished'
        else
            this.status = 'playing'
    }
    get statusMessage()
    {
        if (this.status === 'playing')
            return `Guesses left: ${this.numGuesses}`
        else if (this.status === 'failed')
            return `Nice try! The word was "${this.word.join('')}"`
        else
            return 'Great Work!'
    }
    get puzzle()
    {
        let puzzle = ''

        this.word.forEach((letter) =>
        {
            if (this.guessed.includes(letter) || letter === ' ') 
                puzzle += letter
            else 
                puzzle += '*'
        })
    
        return puzzle
    }
    makeGuess(guess)
    {
        if (this.status === "playing")
        {
            guess = guess.toLowerCase()
            const isUnique = !this.guessed.includes(guess)
            const isBadGuess = !this.word.includes(guess)
            
            if (isUnique)
            {
                this.guessed.push(guess)
            }
        
            if (isUnique && isBadGuess)
            {
                this.numGuesses--
            }
    
            this.calcStatus()
        }
    }
}

