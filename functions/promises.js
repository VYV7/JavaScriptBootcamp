// callback ===============================================
// calls callback function after a delay
const getDataCallback = (num, callback) =>
{
    setTimeout( () =>
    {
        if (typeof num === 'number') {
            callback(undefined, num * 2)
        } else {
            callback('Number must be provided')
        }
    }, 2000)
}
// defines and passes a callback function to the above 
// function.
// success/error is determined based on the arguments
getDataCallback(2, (err, data) =>
{
    if (err) {
        console.log(err)
    } else {
        getDataCallback(data, (err, data) => {
            if (err) {
                console.log('error')
            } else {
                console.log(`Callback data: ${data}`)
            }
        })
    }
})

// promise ================================================
// promise constructor function - called right away
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout( () => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
})

getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(`Promise data: ${data}`)
    }, (err) => {
        console.log(err)
    })
}, (err) => {
    console.log(err)
})

// promise chaining
getDataPromise(10).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    return 'This is some test data'
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})