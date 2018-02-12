"use strict"

class Animal {
  constructor() {
    this.num_legs = 4
    this.is_mammals = true
    this.can_fly = true
    this.superpower = new Superpower
  }
}

class Chimpanzee extends Animal {
  constructor() {
    super()
    this.num_legs = 2
    this.can_fly = false
  }
}

class Frog extends Animal {
  constructor() {
    super()
    this.is_mammals = false
    this.can_fly = false
  }
}

class Eagle extends Animal {
  constructor() {
    super()
    this.num_legs = 2
    this.is_mammals = false
  }
}

class Superpower {
  constructor() {

  }
  use_thunderstorm(){
    return 'JEDERRRR!!!!'
  }
  be_genius(){
    return `I'm smarter than Stephen Hawking`
  }
}

let frog = new Frog
console.log(frog);
console.log(frog.superpower.use_thunderstorm());
let chimpanzee = new Chimpanzee
console.log(chimpanzee);
console.log(chimpanzee.superpower.be_genius());
