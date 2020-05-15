// error handling

const getTip =  (amount) =>
{
    if (typeof amount === 'number')
    {
        return amount * .25
    }
    else
    {
        throw Error('Argument must be a number')    // creashes, prints error message in console
    }
}

try
{
    // const result = getTip('test')                // error: jumps to catch block below
    const result = getTip(true)
    console.log(result)
}
catch (e)
{
    console.log('catched error')
}
