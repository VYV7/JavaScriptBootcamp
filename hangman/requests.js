// asynchronous version
//-----------------------------------------------------------------------------
const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()      // return a promise
        } else {
            throw new Error ('Unable to fetch the puzzle')
        }
    }).then( (data) => {
        return data.puzzle
    })
}


// const getPuzzle = (wordCount) => new Promise((resolve, reject) =>
// {
//     const request = new XMLHttpRequest()                            // create new request object

//     // add an event listener to that new request
//     request.addEventListener('readystatechange', (e) =>
//     {
//         if (e.target.readyState === 4 && e.target.status === 200)   // if status DONE, OK
//         {
//             const data = JSON.parse(e.target.responseText)          // extract data object
//             resolve(data.puzzle)
//         }
//         else if (e.target.readyState === 4)                         // if status DONE, not OK
//         {
//             reject('Error occured')
//         }
//     })

//     // init req, setting the GET method - open and send
//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`) 
//     request.send()   
// })

//-----------------------------------------------------------------------------
const getCountry = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all').then( (response) => {
        if (response.status === 200) {
            console.log(`fetch response: ${response}`)

            //const country = response.find( (country) => country.alpha2Code === countryCode)

        } else {
            throw Error('Unable to load countries')
        }
    }).then( (countries) => {
        return 
    })
}


// const getCountry = (countryCode) => new Promise((resolve, reject) =>
// {
//     const countryRequest = new XMLHttpRequest()                     // create new request object

//     // add an event listener to that new request
//     countryRequest.addEventListener('readystatechange', (e) =>
//     {
//         if (e.target.readyState === 4 && e.target.status === 200)
//         {
//             console.log('Received a response')
//             const countries = JSON.parse(e.target.responseText)
//             // find the country name
//             console.log(`Searching for ${countryCode}...`)
//             const country = countries.find((country) => country.alpha2Code === countryCode)
    
//             resolve(country)
//         }
//         else if (e.target.readyState === 4)
//         {
//             reject('Bad state')
//         }
//     })

//     // init req, setting the GET method - open and send
//     countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//     countryRequest.send() 
//     console.log('Request sent')
// })
//-----------------------------------------------------------------------------







   