"use strict"

class Animal{
    constructor(){ 
        this.name = 'Animal'
        this.num_legs = 4
        this.is_warm_blooded = false
        this.superpower = new Superpower(this.name)
    }

}

class Frog extends Animal{
    constructor(name){
        super()
        this.name = name
        this.class = 'Amphibians'
    }

}

class Bat extends Animal{
    constructor(name){
        super()
        this.name = name
    }
}

class Chimpanzee extends Animal{
    constructor(name){
        super()
        this.name = name    
        this.num_legs = 2
        this.is_warm_blooded = true
    }
}

class Fox extends Animal{
    constructor(name){
        super()
        this.name = name
        this.is_warm_blooded = true
    }
}

class Chicken extends Animal{
    constructor(name){
        super()     
        this.name = name
        this.num_legs = 2 
        this.is_warm_blooded = true             
        this.class = 'birds'
        this.superpower = new Superpower(name)  
    }
}

class Superpower{
    constructor(name){
        this.userLaserVision = this.use_laser_vision(name)
        this.beInvisible = this.be_invisible(name)

    }
    use_laser_vision(name){
        return `zzzzz ${name}`

    }
    be_invisible(name){
        return `clingg,...${name}`
    }
}

let animal = new Animal()
let frog = new Frog('Tuturu')
let chicken = new Chicken('kokoro')
console.log(frog)
console.log(chicken)
console.log(chicken.superpower.use_laser_vision('haiyaaa'))