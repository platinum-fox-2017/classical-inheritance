const Animal = require('./animals_inheritance.js')

class Bat extends Animal{
  constructor(legs = 2,warm_blood = true){
    super(legs = 2,warm_blood = true)
  }
}
module.exports = Bat
