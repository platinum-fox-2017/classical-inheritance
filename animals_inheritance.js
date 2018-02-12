"use strict"

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
  }
  jump(){
    return 'Kodok Melompat!';
  }
}
class Chicken extends Animal {
  constructor(is_warm_blooded){
    super(is_warm_blooded)   
  }
  berkokok(){
    return 'kukuruyuuuk!';
  }
}

let frog = new Frog(true);
console.log(frog.jump())
console.log(frog.num_legs)
let chicken = new Chicken(false);
console.log(chicken.berkokok())
console.log(chicken.num_legs)
