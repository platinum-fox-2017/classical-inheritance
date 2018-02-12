const Animal = require('./animals_inheritance');
const SuperPower = require('./Superpower');

class Fox extends Animal {
    constructor(name) {
        super()
        this.name = name
        this.superpower = new SuperPower(this.name)
    }

    set numLegs(legs) {
        this.num_legs = legs
    }

    set warmBlood(blood) {
        this.is_warm_blooded = blood
    }
}

const redFox = new Fox('Red Fox');
const blueFox = new Fox('Blue Fox');
//change value from parent class
redFox.numLegs = 4
redFox.warmBlood = 'Yes'

console.log(redFox.superpower.use_laser_vision());
console.log(blueFox.superpower.be_invisible());
