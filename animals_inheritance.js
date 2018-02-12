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
        super('Chicken')
    }
}

// kaki 4
class Frog extends Animal {
    constructor() {
        super('Frog', 4)
        this.superpower = new SuperPower('Frog')
    }
}

class Fox extends Animal {
    constructor() {
        super('Fox', 4)
        this.superpower = new SuperPower('Fox')
    }
}

// super power
class SuperPower {
    constructor(name) {
        this.name = name
    }

    use_laser_vision() {
        return `${this.name} Animal is danger with red eyes`
    }

    be_invisible() {
        return `${this.name} This animal is invisble beware`
    }
}


let animal = new Animal()
let chim = new Chimpanze()
let frog = new Frog()
let fox = new Fox()

console.log(fox)
console.log(frog)
console.log(fox.superpower.use_laser_vision())
console.log(frog.superpower.be_invisible())