// asynchronous version
//-----------------------------------------------------------------------------
const getPuzzle = (wordCount, callback) =>
{
    const request = new XMLHttpRequest()                            // create new request object

    // add an event listener to that new request
    request.addEventListener('readystatechange', (e) =>
    {
        if (e.target.readyState === 4 && e.target.status === 200)   // if status DONE, OK
        {
            const data = JSON.parse(e.target.responseText)          // extract data object
            callback(undefined, data.puzzle)
        }
        else if (e.target.readyState === 4)                         // if status DONE, not OK
        {
            callback('Error occured', undefined)
        }
    })

    // init req, setting the GET method - open and send
    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`) 
    request.send()   
}

//-----------------------------------------------------------------------------
const getCountry = (countryCode, callback) =>
{
    const countryRequest = new XMLHttpRequest()                     // create new request object

    // add an event listener to that new request
    countryRequest.addEventListener('readystatechange', (e) =>
    {
        if (e.target.readyState === 4 && e.target.status === 200)
        {
            console.log('Received a response')
            const countries = JSON.parse(e.target.responseText)
            // find the country name
            console.log(`Searching for ${countryCode}...`)
            const country = countries.find((country) => country.alpha2Code === countryCode)
    
            callback(undefined, country)
        }
        else if (e.target.readyState === 4)
        {
            callback('Unable to fetch data', undefined)
        }
    })

    // init req, setting the GET method - open and send
    countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
    countryRequest.send() 
    console.log('Request sent')
}
//-----------------------------------------------------------------------------







   