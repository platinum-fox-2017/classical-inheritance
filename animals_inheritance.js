"use strict"
class Animal {
  constructor() {
    this.alive = true
    this.motile = true
    this.num_of_legs = 0
  }
}
// ******************************

class Mammals extends Animal {
  constructor() {
    super()
    this.warm_blooded = true
    this.vertebrae = true

  }
}

class Reptiles extends Animal {
  constructor() {
    super()
    this.cold_blooded = true
    this.vertebrae = true
    this.land_creature = true
  }
}

class Avian extends Animal {
  constructor() {
    super()
    this.has_wings = true
    this.vertebrae = true
    this.land_creature =true
  }
}

class Amphibian extends Animal {
  constructor() {
    super()
    this.has_gills = true
    this.has_limbs = true
    this.breathe_underwater = true
  }
}

class Fish extends Animal {
  constructor() {
    super()
    this.has_gills = true
    this.has_fins = true
    this.breathe_undewater = true
  }
}

// ********************************
class Murloc extends Amphibian{
  constructor() {
    super()
    this.can_speak = 'MGGLGLglglglrl!'
    this.sapient = true
    this.num_of_legs = 2
  }
}

class Bat extends Mammals{
  constructor() {
    super()
    this.has_echolocation = true
    this.num_of_legs = 2
  }
}

class Chimpanzee extends Mammals{
  constructor() {
    super()
    this.sapient = true
    this.humanoid = true
    this.num_of_legs = 2

  }
}

class Shark extends Fish{
  constructor() {
    super()
    this.predator = true
    this.num_of_legs = 0
  }
}

class Chicken extends Avian{
  constructor() {
    super()
    this.num_of_legs = 2
    this.can_fly = false

  }
}

class Komodo extends Reptiles {
  constructor() {
    super()
    this.venomous = true
    this.num_of_legs = 4
  }
}

// ******************************************

class SuperPower {
  constructor() {
    this.has_superpowers = true
  }
  use_eye_laser(){
    console.log('BEEEEAAAAAAMMMMM');
  }

  be_invisible(){
    console.log('You cannot see me!');
  }

}

let bat = new Bat()
let murloc = new Murloc()
let chimpanzee = new Chimpanzee()
let shark = new Shark()
let chicken = new Chicken()
let komodo = new Komodo()

console.log(bat);
console.log(murloc);
console.log(chimpanzee);
console.log(shark);
console.log(chicken);
console.log(komodo);
