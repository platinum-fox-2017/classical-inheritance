"use strict";
class Animal {
  constructor(num_legs, is_warm_blooded) {
    this.num_legs = num_legs
    this.is_warm_blooded = is_warm_blooded
    this.super_power = new SuperPower()
  }
}

class Frog extends Animal {
  constructor() {
    super()
    this.num_legs = 4
    this.is_warm_blooded = false
  }
}

class Bat extends Animal {
  constructor() {
    super()
    this.num_legs = 'no idea'
    this.can_fly = true
    this.is_warm_blooded = false
    this.mammals = true
  }
}

class Chimpanze extends Animal {
  constructor() {
    super()
    this. num_legs = 2
    this.is_warm_blooded = true
  }

  habitat() {
    this.habitat = 'land'
  }
}

class Fox extends Animal {
  constructor() {
    super()
    this.num_legs = 4
    this.is_warm_blooded = true
    this.mammals = true
  }

  can_kill() {
    this.can_kill = true
  }
}

class Chicken extends Animal{
  constructor() {
    super()
    this.num_legs = 2
    this.cakar = true
    this.is_warm_blooded = true
    this.mammals = true
  }

  produce_eggs() {
    this.produce_eggs = true
  }
}

class SuperPower {
  constructor() {

  }

  use_laser_vision() {
    console.log(`psewwwwwwhhhh<<<<<<<<=======00=========00=====>>>>>>>>>>`)
  }

  be_invisible() {
    console.log(`>>>>>>>>>>>>>can't see me<<<<<<<<<<<<<<<`)
  }

  attack() {
    console.log(`attackkkkk!!!! (◣_◢)`)
  }
}

//--------------------
let animal = new Animal(2, true)
console.log(animal)

let chicken = new Chicken()
console.log(chicken)

let fox = new Fox()
fox.can_kill()
console.log(fox)
fox.super_power.attack()

let chimpanze = new Chimpanze()
chimpanze.habitat()
console.log(chimpanze)
chimpanze.super_power.use_laser_vision()

let bat = new Bat()
console.log(bat)