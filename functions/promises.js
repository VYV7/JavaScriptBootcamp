// callback ===============================================
// calls callback function after a delay
const getDataCallback = (callback) =>
{
    setTimeout( () =>
    {
        // callback(undefined, 'This is the data (callback)')   // success
        callback('This is the error (callback)', undefined)     // error
    }, 2000)
}
// defines and passes a callback function to the above 
// function.
// success/error is determined based on the arguments
getDataCallback((err, data) =>
{
    if (err)    console.log(err)
    else        console.log(data)
})

// promise ================================================
// promise constructor function - called right away
const myPromise = new Promise((resolve, reject) =>
{
    setTimeout( () =>
    {
        // resolve('This is the data (promise)')    // success
        reject('This is the error (promise)')       // error
    }, 2000)
})

// sets up handlers for resolve and reject
// separate functions for success and error
myPromise.then((data) =>
{
    console.log(data)
},
(err) =>
{
    console.log(err)
})
// can do different things with the same information
// without fetching it twice
myPromise.then((data) =>
{
    console.log('Using fetched data 2nd time:')
    console.log(data)
},
(err) =>
{
    console.log('Handling error 2nd time:')
    console.log(err)
})