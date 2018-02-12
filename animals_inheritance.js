"use strict"
class Animal {
  constructor(legs = 2, hands = 2, food = 'fruit') {
    this.legs = legs
    this.hands = hands
    this.food = food
    this.ordo = null
    this.super_power = new SuperPower
  }

  walk() {
    return `Walking with ${this.legs} legs`;
  }
}


class Chimpanzee extends Animal {
  constructor(name) {
    super()
    this.name = name
    this.ordo = 'Mammals'
  }
}

class Chicken extends Animal {
  constructor(name) {
    super()
    this.hands = '2 wings'
    this.food = 'corn'
    this.ordo = 'bird'
    this.name = name
  }
}

class SuperPower {
  constructor() {

  }

  use_fart_bomb() {
    return `BWOOOSHHH`
  }

  use_cute_face() {
    return `CLINGG CLINGG`
  }

}



let chimpanzee = new Chimpanzee('Caesar')
let chicken = new Chicken('Chicken Little')
// console.log(chimpanzee);
// console.log(chicken);
console.log(chimpanzee.super_power.use_fart_bomb());
