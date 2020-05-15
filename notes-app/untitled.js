// Unix Epoch - beginning of time: January 1st 1970 00:00:00

const now = new Date()
const timeStamp = now.getTime()

const myDate = new Date(timeStamp)
console.log(myDate.getFullYear())

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day: ${now.getDate()}`)

// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minutes: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

// challenge area
const date1 = new Date('April 1 1989 6:43:01')
const date2 = new Date('April 16 1983 8:33:03')
if (date1.getTime() < date2.getTime())
{
    console.log(date1.toString())
}
else
{
    console.log(date1.toString())
}