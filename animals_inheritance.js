"use strict"

class SuperPower{
    constructor(use_laser, invisible){
        this.use_laser = use_laser;
        this.invisible = invisible;
    }

    use_laser_vision(){
        if(this.use_laser){
            return 'This animal has a laser vision'
        }else{
            return 'This animal has no laser vision'
        }
    }

    be_invisible(){
        if(this.invisible){
            return 'This animal can be invisible'
        }else{
            return 'This animal is visible'
        }
    }
}

class Animal extends SuperPower{
    constructor(num_legs, is_warm_blooded, use_laser, invisible){
        super(use_laser, invisible);
        this.num_legs = num_legs;
        this.is_warm_blooded = is_warm_blooded;
    }
}

class Frog extends Animal{
    constructor(num_legs, is_warm_blooded, use_laser, invisible){
        super(num_legs, is_warm_blooded, use_laser, invisible);
    }
}

class Bat extends Animal{
    constructor(num_legs, is_warm_blooded, use_laser, invisible){
        super(num_legs, is_warm_blooded, use_laser, invisible);
    }
}

class Chimpanzee extends Animal{
    constructor(num_legs, is_warm_blooded, use_laser, invisible){
        super(num_legs, is_warm_blooded, use_laser, invisible);
    }
}

class Fox extends Animal{
    constructor(num_legs, is_warm_blooded, use_laser, invisible){
        super(num_legs, is_warm_blooded, use_laser, invisible);
    }
}

class Chicken extends Animal{
    constructor(num_legs, is_warm_blooded, use_laser, invisible){
        super(num_legs, is_warm_blooded, use_laser, invisible);
    }
}


//Driver code
let animal = new Animal(2, true, true, true);
console.log(animal);
console.log(animal.use_laser_vision());
console.log(animal.be_invisible());

console.log('______________________')

let frog = new Frog(4, false, true, false);
console.log(frog);
console.log(frog.use_laser_vision());
console.log(frog.be_invisible());

console.log('______________________')

let chimpanzee = new Chimpanzee(2, true, false, true);
console.log(chimpanzee);
console.log(chimpanzee.use_laser_vision());
console.log(chimpanzee.be_invisible());

console.log('______________________')

let chicken = new Chicken(2, false, false, false);
console.log(chicken);
console.log(chicken.use_laser_vision());
console.log(chicken.be_invisible());