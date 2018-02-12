const Animal = require ('./animals_inheritance')
const SuperPower = require ('./superpower')

class Ikan extends Animal{
  constructor(legs,warmBlood,herbivore,layEggs) {
    super(legs,warmBlood,herbivore,layEggs)
    this._live_in_land = false
  }
}

class Pirahna extends Ikan {
  constructor(name,legs,warmBlood,herbivore,layEggs,teeth){
    super(legs,warmBlood,herbivore,layEggs)
    this._name = name
    this._teeth = teeth
  }
}

var pirahna = new Pirahna('piranha',0,false,false,true,true)
console.log(pirahna);
