"use strict"

class Animal {
    constructor(species, num_legs) {
        this.species  = species;
        this.num_legs = num_legs;
    }

    is_warm_blooded() {
        this.is_warm_blooded = true;
    }
}

class Frog extends Animal {
    constructor(species) {
        super(species);
        this.num_legs = 2;
    }

    is_warm_blooded() {
        this.is_warm_blooded = false;
    }
}

class Bat extends Animal {
    constructor(species) {
        super(species);
        this.num_legs = 2;
    }

    is_warm_blooded() {
        this.is_warm_blooded = false;
    }
}

class Chimpanzee extends Animal {
    constructor(species) {
        super(species);
        this.num_legs = 2;
    }

    is_warm_blooded() {
        this.is_warm_blooded = false;
    }
}

class Fox extends Animal {
    constructor(species) {
        super(species);
        this.num_legs = 4;
    }

    is_warm_blooded() {
        this.is_warm_blooded = true;
    }
}

class Chicken extends Animal {
    constructor(species) {
        super(species);
        this.num_legs = 2;
    }

    is_warm_blooded() {
        this.is_warm_blooded = false;
    }
}

var animal = new Animal('mamal', 4);
animal.is_warm_blooded();
console.log(animal);

var fox = new Fox('Mamal');
fox.is_warm_blooded();
console.log(fox);

var frog = new Frog('Amphibi');
frog.is_warm_blooded();
console.log(frog);

var chicken = new Chicken('Poultry');
chicken.is_warm_blooded();
console.log(chicken);