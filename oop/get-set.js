const data =
{
    locations: [],
    get location ()             // overwrites default getter
    {
        return this._location
    },
    set location (value)        // overwrites default setter
    {
        this._location = value.trim()
        this.locations.push(this._location)
    }
}

console.log(data)

// code that uses the data object
data.location = 'Philadelphia'
console.log(data.location)