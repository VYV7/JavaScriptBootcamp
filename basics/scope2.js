// Variable shadowing
// leaked globals are variables defined automaticaly
// by assigning a value to a variable that does not exist


let name = 'Peter'

if (true)
{
    let name = 'Mike'

    if (true)
    {
        console.log(name)   // will print Mike
    }
}

if (true)
{
    console.log(name)
}