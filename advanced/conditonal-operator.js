let myAge = 16
let message = myAge >= 18 ? 'You can vote' : 'You cannot vote'

// if (myAge >= 18)
// {
//     message = 'You can vote'
// }
// else
// {
//     message = 'You cannot vote'
// }

console.log(message)

//=============================================================================

myAge = 25

const showPage = () =>
{
    // console.log('Showing the page')
    return 'Showing the page'
}
const showErrorPage = () =>
{
    // console.log('Showing the error page')
    return 'Showing the error page'
}

// myAge >= 21 ? showPage() : showErrorPage()

message = myAge >= 21 ? showPage() : showErrorPage()

console.log(message)

// challange area =============================================================
const team = ['Tyler', 'Porter', 'Peter']

console.log(team.length <= 4 ? `Team size: ${team.length}` : 'Too many peaple')

