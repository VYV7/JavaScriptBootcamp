const products = []
const product = products[0]

// Truthy - values that resolve to true in boolean context
//          Truthy values: empty arrays and objects
// Falsy -  values that resolve to false in boolean context
//          Falsy valuse: false, 0, empty string, null, undefined, NaN

// if (product !== undefined)
if (product)
{
    console.log('Product found')
}
else
{
    console.log('Product not found')
}