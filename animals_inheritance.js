"use strict"

class Animal{
    constructor(){
        this.num_legs = 4
        this.is_warm_blooded = false
        this.superpower = new Superpower()
    }

}

class Frog extends Animal{
    constructor(){
        super()
        this.class = 'Amphibians'
    }

}

class Bat extends Animal{
    constructor(){
        super()
    }
}

class Chimpanzee extends Animal{
    constructor(){
        super()
        this.num_legs = 2
        this.is_warm_blooded = true
    }
}

class Fox extends Animal{
    constructor(){
        super()
        this.is_warm_blooded = true
    }
}

class Chicken extends Animal{
    constructor(jenis){
        super()
        this.class = jenis
    }
}

class Superpower{
    constructor(){
        this.uselaser_vision = this.use_laser_vision()
        this.beInvisible = this.be_invisible()

    }
    use_laser_vision(){
        return 'zzzzzzzzz'

    }
    be_invisible(){
        return 'clingg,...'
    }
}

let animal = new Animal()
let frog = new Frog()
let chimpanzee = new Chimpanzee()
let fox = new Fox()
let chicken = new Chicken('birds')
//console.log(animal)
// console.log(chimpanzee)
// console.log(frog)
// console.log(chicken)
console.log(fox)
console.log(fox.superpower.use_laser_vision())