"use strict"

class Animal{
  constructor(){
    this.num_legs=2
    this.is_warm_blooded=true
  }
}

class Harimau extends Animal{
  constructor(){
    super()
    this.num_legs=4
  }

  get superpower(){
    return new SuperPower()
  }
}

class Bat extends Animal{
  constructor(){
    super()
  }

  get superpower(){
    return new SuperPower()
  }
}

class Chimpanzee extends Animal{
  constructor(){
    super()
    this.is_warm_blooded=false
  }

  get superpower(){
    return new SuperPower()
  }
}

class Kuda extends Animal{
  constructor(){
    super()
    this.num_legs=4
  }

  get superpower(){
    return new SuperPower()
  }
}

class Chiken extends Animal{
  constructor(){
    super()
    this.is_warm_blooded=false
  }

  get superpower(){
    return new SuperPower()
  }
}

class SuperPower{
  constructor(){

  }
  use_laser_vision(){
    return 'saya punya kekuatan laser tetowet'
  }
  be_invisible(){
    return 'gue bisa hilang lohhhh'
  }
}
let harimau = new Harimau()
let chiken = new Chiken()
let chimpanzee = new Chimpanzee()
console.log(harimau.is_warm_blooded);
console.log(harimau.num_legs);
console.log(chimpanzee.superpower.use_laser_vision());
