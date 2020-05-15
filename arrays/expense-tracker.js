const account = 
{
    name: 'Andrew Mead',
    expenses: [],           // Expenses -> description, amount
    income: [],
    addExpense: function (d, p)       // addExpense -> description, amount
    {
        this.expenses.push(
            {
                description: d,
                price: p
            })
    },
    addIncome: function (d, a)
    {
        this.income.push(
            {
                description: d,
                amount: a
            })
    },
    getAccountSummary: function ()
    {
        let income = 0
        let expenses = 0
        let balance = 0
        // calculate income
        this.income.forEach(function(item)
        {
            income = income + item.amount
        })
        // calculate expanses
        this.expenses.forEach(function (item)
        {
            expenses = expenses + item.price
        })
        // calculate balance
        balance = income - expenses
        return `${this.name} has a balance of $${balance}. $${income} in income. $${expenses} in expenses`
    }
}

// 1. add income array to account
// 2. addIncome method -> description, amount
// 3. modify getAccountSummary
// Andrew Mead has a balance of $10. $100 in income. $90 in expenses.



account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account)
console.log(account.getAccountSummary())