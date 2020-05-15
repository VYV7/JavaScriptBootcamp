let myAccount = {
    name: 'Andrew Mead',
    expences: 0,
    income: 0
}

// add expenses
let addExpense = function (account, amount) 
{
    // changes properties of the original object
    account.expences = account.expences + amount
}
// add income
let addIncome = function (account, amount)
{
    account.income = account.income + amount
}
// reset account
let resetAccount = function (account)
{
    account.income = 0
    account.expences = 0
}
// get account summary
let getAccountSummary = function (account)
{
    let netIncome = account.income - account.expences

    console.log(`Account for ${account.name} has $${netIncome}`)
    console.log(`$${account.income} in income and`)
    console.log(`$${account.expences} in expenses`)
}
// Example: 
// Account for Andrew has $800, $1000 in income. $200 in expenses

// use case:
// add income
// add expense
// add expense
// get account summary
// reset account
// get account summary

addIncome(myAccount, 1000)
addExpense(myAccount, 100)
addExpense(myAccount, 150)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)
