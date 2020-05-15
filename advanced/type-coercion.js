//Type Coercion - a string, a number, a boolean ===============================

// console.log('5' + 5)            // = 55 ('5' code used)
// console.log('5' - 5)            // = 0  ('5' converted to a number)
// console.log('5' === 5)          // fales (=== converts to the same type, then compares)
// console.log('5' == 5)           // true (== does not convert, only compares) 

// checking type on a value ===================================================
// console.log(typeof 123)          // number
// console.log(typeof '5')          // string
// console.log(typeof {})           // object
// console.log(typeof [])           // object

//=============================================================================
const value = true + 12             // = 13
const type = typeof value           // number
console.log(type)
console.log(value)