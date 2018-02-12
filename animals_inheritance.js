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

let binatang1 = new Animal(1, 'cold')
let binatang2 = new Frog(2, 'cold')
let binatang3 = new Bat(2, 'cold')
let binatang4 = new Chimpanzee(4, 'warm')
let binatang5 = new Fox(4, 'warm')
let binatang6 = new Chicken(2, 'cold')

console.log(binatang1);
console.log(binatang2);
console.log(binatang3);
console.log(binatang4);
console.log(binatang5);
console.log(binatang6);
console.log("=================");
console.log(binatang5.superPower.use_laser_vision());
