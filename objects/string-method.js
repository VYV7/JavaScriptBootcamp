let name = ' Andrew Mead '

// length property
console.log(name.length)

// convert to upper case
console.log(name.toUpperCase())

// convert to lower case
console.log(name.toLowerCase())

// includes method
let password = 'abcdpass098'
console.log(password.includes('password'))

// trim
console.log(name.trim())

// challange area

// isValidPassword
// length is more than 8, doesn't contain the word password

let isValidPassword = function (password)
{
   return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$%^&'))
console.log(isValidPassword('asdfpasdpoijpassword'))