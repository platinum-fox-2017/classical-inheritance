"use strict"

class Animal {
    constructor(legs, blood){
        this.num_legs = legs
        this.is_warm_blooded = blood
    }
}

class Frog extends Animal {
    constructor(legs, blood){
        super(legs, blood)
    }
}
class Bat extends Animal{
    constructor(legs, blood){
        super(legs, blood)
        
    }
}
class Chimpanzee extends Animal{
    constructor(legs, blood){
        super(legs, blood)
        
    }
}
class Fox extends Animal{
    constructor(legs, blood){
        super(legs, blood)
        
    }
}
class Chicken extends Animal{
    constructor(legs, blood){
        super(legs, blood)
        this.superpower = new SuperPower()
    }
}

class SuperPower{
    constructor(){

    }
    use_laser_vision(){
        // console.log('CIIIAT')
        return 'Kukuryuyu';
    }
    be_visible(){

    }
}


var binatang = new Animal(4, 'HAHA')
var kodok = new Frog(2, 'cold')
var kelelawar = new Bat(2, 'cold')
var simpanse = new Chimpanzee(2, 'cold')
var serigala = new Fox(2, 'cold')
var ayam = new Chicken(2, 'cold')

console.log(binatang)
console.log(kodok)
console.log(kelelawar)
console.log(simpanse)
console.log(serigala)
console.log(ayam)

console.log(ayam.superpower.use_laser_vision())