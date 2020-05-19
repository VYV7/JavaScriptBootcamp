//---------------------------------------------------------
// executor function for the promise object
// takes two functions as arguments (defined later on)
// resolve - called with one argument if things go well
// reject - called with ine argument if things go bad 
const myExecutor = (resolve, reject) => {
    
    setTimeout( () => {
        const result = 1 + 1

        if (result === 2) {
            resolve('Promise resolved')
        } else {
            reject('Promise rejected')
        }
    }, 2000)
}

//---------------------------------------------------------
// creating a new promise
let myPromise = new Promise(myExecutor)
console.log(`A new Promise has just been created:`)
console.log(myPromise)

//---------------------------------------------------------
define what to do when the promise is resolved/rejected
myPromise.then((message) => {           // handle fulfilled promise 1
    console.log(`Then1: ${message}`)
    console.log(myPromise)
}).catch((reason) => {                  // handle any rejected promises
    console.log(`Catch: ${reason}`)
    console.log(myPromise)
})

//---------------------------------------------------------
// promise chaining
myPromise.then( (message) => {
    console.log(`Then1: ${message}`)
    return 'Then1 sent: ' + message 
}).then( (fromThen1) => {
    console.log(`Then2: ${fromThen1}`)
}).catch( (reason) => {
    console.log(`Catch: ${reason}`)
})