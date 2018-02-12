"use strict"

class SuperPower {
  
  use_laser_vision() {
    return '========>======>===>>>>>'   
  }
  be_invisible(){
   return '################' 
  }
}
class Animal  {
  constructor(is_warm_blooded)  {
    this.num_legs = 2;
    this.is_warm_blooded = is_warm_blooded;
  }
}
class Frog extends Animal {
  constructor(is_warm_blooded){
    super(is_warm_blooded)   
    this.num_legs = 4;
    this.superpower = new SuperPower();
  }
  jump(){
    return 'Kodok Melompat!';
  }
}
class Chicken extends Animal {
  constructor(is_warm_blooded){
    super(is_warm_blooded)   
    this.superpower = new SuperPower();
  }
  berkokok(){
    return 'kukuruyuuuk!';
  }
}

let frog = new Frog(true);
console.log(frog.jump())
console.log(frog.num_legs)
console.log(frog.superpower.use_laser_vision())
let chicken = new Chicken(false);
console.log(chicken.berkokok())
console.log(chicken.num_legs)
console.log(chicken.superpower.be_invisible());
