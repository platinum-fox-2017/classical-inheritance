"use strict"
class Animal {
    constructor(name) {
        this.name = name || 'animal'
        this.num_legs = 2
        this.is_warm_blooded = true
    }
    numLegs() {
        console.log(`${this.name} memiliki ${this.num_legs} kaki`);
    }
    isWarmBlooded() {
        console.log(`${this.name} berdarah ${(this.is_warm_blooded ? 'panas' : 'dingin')}`)
    }
}
class Frog extends Animal {
    constructor() {
        super('Frog')
        super.num_legs = 4
    }
}
class Bat extends Animal {
    constructor() {
        super('Frog')
    }
}
class Chimpanzee extends Animal {
    constructor() {
        super('Chimpanzee')
    }
}
class Fox extends Animal {
    constructor() {
        super('Fox')
        super.num_legs = 4
        super.is_warm_blooded = false
    }
}
class Chicken extends Animal {
    constructor() {
        super('Chicken')
    }
}
let animal = new Animal()
let frog = new Frog()
let bat = new Bat()
let chimpanzee = new Chimpanzee()
let fox = new Fox()
let chicken = new Chicken()
fox.numLegs()
fox.isWarmBlooded()