const Animal = require ('./animals_inheritance')
const SuperPower = require ('./superpower')

class Reptil extends Animal{
  constructor(legs,warmBlood,herbivore,layEggs) {
    super(legs,warmBlood,herbivore,layEggs)
    this._live_in_land = true
  }
}

class Ular extends Reptil{
  constructor(name,legs,warmBlood,herbivore,layEggs,poisonous) {
    super(legs,warmBlood,herbivore,layEggs)
    this._name = name
    this._poisonous = poisonous
    this.superpower = new SuperPower(this._name)
  }
}

var kobra = new Ular('kobra',0,false,false,true,true)
console.log(kobra);
console.log(kobra.superpower.ultimate_poison());
