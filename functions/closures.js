// closure allows to create a variable and set rules 
// how they can be accessed
const createCounter = () =>
{
    let count = 0
    // return an object that allows to interact
    // with variable count
    return{
        increment() 
        {
            count++
        },
        decrement()
        {
            count--
        },
        get()
        {
            return count
        }        
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()

counter.count = 10          // this will try to add a property 

console.log(counter.get())  // prints -1


// adder
const createAdder = (a) =>
{
    return (b) =>
    {
        console.log(a ,b)
        return a + b
    }
}
// create add10 function
const add10 = createAdder(10)       // a = 10 will be remembered
console.log(add10(-2))              // b = -2 adds to a = 10

// challenge area =============================================================
const createTipper = (baseTip) =>
{
    return (amount) =>
    {
        return baseTip * amount
    }
}

const tip15 = createTipper(.15)
const tip20 = createTipper(.20)
const bill = 80

console.log(`The tip on $${bill} is $${tip15(bill)}`)
console.log(`The tip on $${bill} is $${tip20(bill)}`)