// restaurant object
let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    // method - availability
    checkAvailability: function (partySize)
    {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    // methode - seatParty
    seatParty: function (partySize)
    {
            this.guestCount = this.guestCount + partySize
    },
    // methode - removeParty
    removeParty: function (partySize)
    {
        this.guestCount = this.guestCount - this.guestCount
    }
}


restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))
