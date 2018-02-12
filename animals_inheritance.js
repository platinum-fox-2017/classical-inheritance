"use strict"
const SuperPower = require('./superPower.js')

class Animal{
  constructor(legs = 2,warm_blood = true,name){
    this.leg = legs
    this.warm_blood = warm_blood
    this.superPower = new SuperPower(name)
  }
}

module.exports = Animal
