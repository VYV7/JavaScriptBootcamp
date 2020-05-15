// var is function scoped not block based

// if (10 === 20)
// {
//     var firstName = 'Jen'       // defined anyway
//     // let firstName = 'Jen'    // this one generates error
// }

// console.log(firstName)

// const setName = function ()
// {
//     // var myName = 'Peter'    // visicble only in this function
//     let myName = 'Peter' // can be accessed outside the function
// }

// setName()
// console.log(myName)


variable = 10

var variable = 5

console.log(variable)