"use strict"
class Animal {
    constructor(name, num_leg = 2) {
        this._name = name
        this._num_leg = num_leg
    }
}

// kaki 2
class Chimpanze extends Animal {
    constructor() {
        super('Chimpanze')
    }
}

class Chicken extends Animal {
    constructor() {
        super()
    }
}

// kaki 4
class Frog extends Animal {
    constructor() {
        super('Frog', 4)
    }
}

class Fox extends Animal {
    constructor() {
        super('Fox', 4)
    }
}

// super power
class SuperPower {
    constructor() {

    }

    use_laser_vision() {
        return `Animal is danger with red eyes`
    }

    be_invisible() {
        return `This animal is invisble beware`
    }
}


let animal = new Animal()
let chim = new Chimpanze()
let frog = new Frog()
let fox = new Fox()
console.log(chim)
console.log(frog)
console.log(fox)