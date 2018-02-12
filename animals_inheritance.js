"use strict"

class Animal {
    constructor(legs,nocturnal,types,sex,sounds) {
        this.num_legs = legs || 2
        this.nocturnal = nocturnal || false
        this.type = types || 'Omnivore'
        this._sex = sex || 'Hemaphrodite'
        this._sound = sounds || '...'
    }
    get sound() {
        return this._sound;
    }
}

class Bat extends Animal{
    constructor(legs,nocturnal,types,sex,sounds,wingsSize,blindStatus) {
        super(legs,nocturnal,types,sex,sounds)
        this.superPower = new SuperPower()
        this.wingsSize = wingsSize
        this.blindStatus=blindStatus
    }
}

class Cow extends Animal{
    constructor(legs,nocturnal,types,sex,sounds) {
        super(legs,nocturnal,types,sex,sounds)
    }
}

class SuperPower {
    constructor() {}

    be_Invisible() {
        console.log('You can\'t see me now');
    }
}

let batman = new Bat(2,true,'Omnivore','Female','Small',true)
let cowman = new Cow(4,true,'Hebivore','Male','Mooo....')

console.log(batman)
// console.log(batman.sound);
batman.superPower.be_Invisible()

// console.log(cowman)
// console.log(cowman.sound);

