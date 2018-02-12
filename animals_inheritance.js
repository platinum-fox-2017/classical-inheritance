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
        this.superPower = new SuperPower();
    }

    is_warm_blooded() {
        this.is_warm_blooded = false;
    }
}

class Bat extends Animal {
    constructor(species) {
        super(species);
        this.num_legs = 2;
        this.superPower = new SuperPower();
    }

    is_warm_blooded() {
        this.is_warm_blooded = false;
    }
}

class Chimpanzee extends Animal {
    constructor(species) {
        super(species);
        this.num_legs = 2;
        this.superPower = new SuperPower();
    }

    is_warm_blooded() {
        this.is_warm_blooded = false;
    }
}

class Fox extends Animal {
    constructor(species) {
        super(species);
        this.num_legs = 4;
        this.superPower = new SuperPower();
    }

    is_warm_blooded() {
        this.is_warm_blooded = true;
    }
}

class Chicken extends Animal {
    constructor(species) {
        super(species);
        this.num_legs = 2;
        this.superPower = new SuperPower();
    }

    is_warm_blooded() {
        this.is_warm_blooded = false;
    }
}

class SuperPower {
    use_laser_vision() {
        return "I have laser vision !";
    }

    be_invisible() {
        return "U can't see me !";
    }

    liveInTwoPlace() {
        return "I can live in water and land !"
    }
}

var animal = new Animal('Insect', 1000);
animal.is_warm_blooded();
console.log(animal);

var frog = new Frog('Amphibi');
frog.is_warm_blooded();
console.log(frog);
console.log(frog.superPower.liveInTwoPlace());

var chicken = new Chicken('Poultry');
chicken.is_warm_blooded();
console.log(chicken);
console.log(chicken.superPower.be_invisible());


var fox = new Fox('Mamal');
fox.is_warm_blooded();
console.log(fox);
console.log(fox.superPower.be_invisible());