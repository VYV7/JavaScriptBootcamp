// model of a book
let myBook = {
    // properties of a book
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}
// model of a book
let otherBook = {
    // properties of a book
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book)
{
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// challenge area
// create function - take fahrenheit in - return object with all three

let convF = function (fahrenheit)
{
    return {
        fahrenheit: fahrenheit,
        celcius: (fahrenheit - 32) * (5/9),
        kelvin: (fahrenheit - 32) * (5/9) + 273.15
    }
}

let AllThree = convF(74)

console.log(AllThree)
console.log(`${AllThree.fahrenheit}F`)
console.log(`${AllThree.celcius}C`)
console.log(`${AllThree.kelvin}K`)