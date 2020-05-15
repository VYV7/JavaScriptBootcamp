// lexical scope (static scope)
// global scope - defined outside of all code scopes
// local scope - defined inside a code scope

// in a scope you can access variables defined in that scope or
// in any parent scope

let varOne = 'varOne'

if (true)
{
    console.log(varOne)
    let varTwo = 'varTwo'
}

console.log(varTwo)