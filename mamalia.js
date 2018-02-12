const Animal = require ('./animals_inheritance')
const SuperPower = require ('./superpower')

class Mamalia extends Animal{
  constructor(legs,warmBlood,herbivore,layEggs) {
    super(legs,warmBlood,herbivore,layEggs)
    this._live_in_land = true
  }
}

class Monyet extends Mamalia{
  constructor(name,legs,warmBlood,herbivore,layEggs,climbtree) {
    super(legs,warmBlood,herbivore,layEggs)
    this._name = name
    this._climb_tree = climbtree
    this.superpower = new SuperPower(this._name)
  }
}

var orangUtan = new Monyet('orang utan',2,true,false,false,true)
console.log(orangUtan);
console.log(orangUtan.superpower.almighty_punch());
