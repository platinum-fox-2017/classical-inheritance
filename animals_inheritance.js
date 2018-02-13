"use strict"

class Animal {
  constructor(num, tipe) {
    this.num_legs = num
    this.is_warm_blooded = tipe
  }
}

class Frog extends Animal{
  constructor(num, tipe) {
    super(num, tipe)
  }
}

class Bat extends Animal{
  constructor(num, tipe) {
    super(num, tipe)
  }
}

class Chimpanzee extends Animal{
  constructor(num, tipe) {
    super(num, tipe)
  }
}

class Fox extends Animal{
  constructor(num, tipe) {
    super(num, tipe)
    this.superPower = new SuperPower
  }
}

class Chicken extends Animal{
  constructor(num, tipe) {
    super(num, tipe)
  }
}

class SuperPower{
  use_laser_vision() {
    return 'cwiiiiiiiit'
  }

  be_invisible() {
    return 'wes'
  }

}

let Peliharaanku = new Animal(1, 'cold')
let Forgy = new Frog(2, 'cold')
let Batsi = new Bat(2, 'cold')
let Chimpzee = new Chimpanzee(4, 'warm')
let Foxy = new Fox(4, 'warm')
let Chikenzee = new Chicken(2, 'cold')

console.log(Peliharaanku);
console.log(Forgy);
console.log(Batsi);
console.log(Chimpzee);
console.log(Foxy);
console.log(Chikenzee);
console.log("=================a");
console.log(binatang5.superPower.use_laser_vision());
