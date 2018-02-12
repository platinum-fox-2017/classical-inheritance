"use strict"

class Animal {
    constructor(numLegs, warmblood) {
        this._numLegs = numLegs;
        this._isWarmBlooded = warmblood;
    }
}

class Frog extends Animal {
    constructor(numLegs, warmblood) {
        super(numLegs, warmblood);
    }

    get superpower() {
        return new SuperPower();
    }

}

class Bat extends Animal {
    constructor(numLegs, warmblood) {
        super(numLegs, warmblood);
    }

    get superpower() {
        return new SuperPower();
    }

}

class Chimpanzee extends Animal {
    constructor(numLegs, warmblood) {
        super(numLegs, warmblood);
    }

    get superpower() {
        return new SuperPower();
    }
}

class Fox extends Animal {
    constructor(numLegs, warmblood) {
        super(numLegs, warmblood);
    }

    get superpower() {
        return new SuperPower();
    }
}

class Chicken extends Animal {
    constructor(numLegs, warmblood) {
        super(numLegs, warmblood);
    }

    get superpower() {
        return new SuperPower();
    }

}

class SuperPower {
    constructor() {

    }

    use_laser_vision() {
        return 'Bzzzzzzttttttttttttt';
    }

    be_invisible() {
        return 'Hilangkan saya kembali pada Ibuku !';
    }


}


var binatang = new Animal();
// console.log(binatang);

// var kekuatanBaru = new SuperPower();

var Kodok = new Frog(4, 'coldBlooded');
// console.log(Kodok);

var Kelelawar = new Bat(4, 'warmBlooded');
// console.log(Kelelawar);

var Monyet = new Chimpanzee(2, 'warmBlooded');
// console.log(Monyet);

var Rubah = new Fox(4, 'warmBlooded');
console.log(Rubah.superpower.use_laser_vision());

var Ayam = new Chicken(4, 'warmBlooded');
// console.log(Ayam);


