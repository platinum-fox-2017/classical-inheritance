"use strict"

class Animal{
    constructor(num_legs, is_warm_blooded){
        this.num_legs = num_legs;
        this.is_warm_blooded = is_warm_blooded;
    }
}

class Frog extends Animal{
    constructor(num_legs, is_warm_blooded){
        super(num_legs, is_warm_blooded);
    }
}

class Bat extends Animal{
    constructor(num_legs, is_warm_blooded){
        super(num_legs, is_warm_blooded);
    }
}

class Chimpanzee extends Animal{
    constructor(num_legs, is_warm_blooded){
        super(num_legs, is_warm_blooded);
    }
}

class Fox extends Animal{
    constructor(num_legs, is_warm_blooded){
        super(num_legs, is_warm_blooded);
    }
}

class Chicken extends Animal{
    constructor(num_legs, is_warm_blooded){
        super(num_legs, is_warm_blooded);
    }
}

let animal = new Animal(2, true);
console.log(animal);

let chimpanzee = new Frog(2, true);
console.log(chimpanzee);

let frog = new Frog(4, false);
console.log(frog);

let chicken = new Chicken(2, false);
console.log(chicken);