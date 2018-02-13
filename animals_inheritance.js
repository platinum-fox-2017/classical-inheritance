"use strict"
class Animal {
  constructor(alive) {
    this.alive = alive
    this.motile = true
    this.num_of_legs = 0
    this.has_wings = false
    this.has_gills = false
    this.has_limbs = false
    this.vertebrae = true
    this.warm_blooded = true
    this.land_creature = true
    this.sapient = false
  }
}
// ******************************

class Mammals extends Animal {
  constructor(alive) {
    super(alive)

  }
}

class Reptiles extends Animal {
  constructor() {
    super()
    this.warm_blooded = false
    this.num_of_legs = 4
  }
}

class Avian extends Animal {
  constructor() {
    super()
    this.has_wings = true
    this.num_of_legs = 2
  }
}

class Amphibian extends Animal {
  constructor() {
    super()
    this.has_limbs = true
    this.has_gills = true
    this.breathe_underwater = true
  }
}

class Fish extends Animal {
  constructor() {
    super()
    this.has_gills = true
    this.has_fins = true
    this.breathe_undewater = true
    this.land_creature = false
  }
}

// ********************************
class Murloc extends Amphibian{
  constructor() {
    super()
    this.can_speak = 'MGGLGLglglglrl!'
    this.sapient = false
    this.num_of_legs = 2
  }
}

class Bat extends Mammals{
  constructor() {
    super()
    this.has_wings = true
    this.has_echolocation = true
    this.num_of_legs = 2
    this.superpower = new SuperPower()
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
    this.can_fly = false
  }
}

class Komodo extends Reptiles {
  constructor() {
    super()
    this.venomous = true
  }
}

// ******************************************

class SuperPower{
  constructor() {
    this.has_superpowers = true
  }
  use_eye_laser(){
    console.log(`bat looks at you... BEEEAAAAAAAMMMMMM`);
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

bat.superpower.use_eye_laser()
bat.superpower.be_invisible()
