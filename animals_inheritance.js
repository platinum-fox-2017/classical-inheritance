"use strict"

class Animal {
  constructor() {
    this.legs = 4
    this.is_hairy = true
    this.is_deadly = false
    this.superPower = new SuperPower()
  }
}

class Frog extends Animal {
  constructor() {
    super()
    this.is_hairy = false
  }
}

class Bat extends Animal {
  constructor() {
    super()
    this.is_deadly = true
    this.legs = 2
  }
}

class T_rex extends Animal {
  constructor() {
    super()
    this.is_hairy = false
  }
}

class SuperPower {
  constructor() {

  }

  laser_vision() {
    console.log(`chiuuuuwwwwww , enemy just got lasered !!`);
  }
}


const frog = new Frog()
console.log(frog);
const bat = new Bat()
console.log(bat);
const trex = new T_rex()
console.log(trex);


frog.superPower.laser_vision()
