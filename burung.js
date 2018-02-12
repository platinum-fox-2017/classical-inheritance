const Animal = require ('./animals_inheritance')
const SuperPower = require ('./superpower')

class Burung extends Animal{
  constructor(legs,warmBlood,herbivore,layEggs) {
    super(legs,warmBlood,herbivore,layEggs)
    this._live_in_land = true
  }
}

class Beo extends Burung{
  constructor(name,legs,warmBlood,herbivore,layEggs,canFly) {
    super(legs,warmBlood,herbivore,layEggs)
    this._name = name
    this._can_fly = canFly
    this.superpower = new SuperPower(this._name)
  }
}

var beo = new Beo('beo',2,true,false,true,true)
console.log(beo);
console.log(beo.superpower.wing_blade())
