// prototypal inheritance


class Person                    // parent class
{
    constructor (firstName, lastName, age, likes = [])
    {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio()
    {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) =>
        {
            bio += ` ${this.firstName} likes ${like}.`
        })
    
        return bio
    }
    set fullName(fullName)
    {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName()
    {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person       // sub-class
{
    constructor(firstName, lastName, age, position, likes)
    {
        super(firstName, lastName, age, likes) // constructor of the parent
        this.position = position
    }
    getBio()                        // overwriting parent method
    {
        return `${this.fullName} is a ${this.position}`
    }
    getYearsLeft()
    {
        return 65 - this.age
    }
}

class Student extends Person
{
    constructor(firstName, lastName, age, grade, likes)
    {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    getBio()
    {
        const status = this.grade >= 70 ? 'passing': 'failing'

        return `${this.firstName} is ${status} the class`
    }
    updateGrade(amount)
    {
        this.grade += amount
        if (this.grade > 100)       this.grade = 100
        else if (this.grade < 0)    this.grade = 0
    }
}
//=============================================================================

const employee1 = new Employee ('Andrew', 'Mead', 27, 'teacher', [])
console.log(employee1)

employee1.fullName = 'Peter Johnes'

console.log(employee1.getBio())




