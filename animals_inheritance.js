"use strict"
// Release 0
class Animal {
    constructor(){
        this.numLegs = 4
        this.isWarmBlooded = true
        this.class = 'Vertebrates'
        this.phylum = 'Chordata'
    }
}

class Fox extends Animal {
    constructor(){
        super()
    }
    get superpower(){
        return new SuperPower()
    }
}

class Komodo extends Animal {
    constructor(){
        super()
        // overriding
        this.isWarmBlooded = false
    }
    get superpower(){
        return new SuperPower()
    }
}

class Shark extends Animal {
    constructor(){
        super()
        this.isWarmBlooded = false
        this.numLegs = 0
    }
    get superpower(){
        return new SuperPower()
    }
}

class Starfish extends Animal {
    constructor(){
        super()
        this.isWarmBlooded = false
        this.numLegs = 0
        this.class = 'Invertebrates'
        this.phylum = 'Echinodermata'
    }
    get superpower(){
        return new SuperPower()
    }
}

// Release 1
class SuperPower {
    constructor(){
    }
    use_laser_vision(){
        return 'Zap!! your pants on fire!'
    }
    be_invisible(){
        return 'Nothing happens...'
    }
    sing(){
        return 'Baby shark, doo doo doo, doo doo doo doo doo~'
    }

}

let animal = new Animal()
let fox = new Fox()
let komodo = new Komodo()
let shark = new Shark()
let starfish = new Starfish()


console.log(animal)
console.log(fox)
console.log(shark)
console.log(starfish)
console.log()
console.log(fox.superpower.use_laser_vision())
console.log(shark.superpower.sing())