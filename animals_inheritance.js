"use strict"

class SuperPower{
    constructor(obj){
        this.obj = obj;
    }

    use_laser_vision(){
        return (this.obj+" Use Laser Vision! Pew! Pew! Pew!");
    }

    be_invisible(){
        return this.obj+" is disapearing! Whoosh!";
    }

    ultra_sound(){
        return this.obj+" use its ultra sound ability! WIIIIING!!!!"
    }
}

class Animal{
    constructor(num_legs, is_warm_blood){
        this.num_legs = num_legs;
        this.is_warm_blood = is_warm_blood;
    }
}

class Frog extends Animal{
    constructor(){
        super(4,false);
    }

    get superpower(){
        return new SuperPower(this.constructor.name);
    }
}

class Bat extends Animal{
    constructor(){
        super(2,true);
    }

    get superpower(){
        return new SuperPower(this.constructor.name);
    }
}

class Chimpanzee extends Animal{
    constructor(){
        super(4,true);
    }

    get superpower(){
        return new SuperPower(this.constructor.name);
    }
}

class Fox extends Animal{
    constructor(){
        super(4,true);
    }

    get superpower(){
        return new SuperPower(this.constructor.name);
    }
}


class Chicken extends Animal{
    constructor(){
        super(2,true);
    }

    get superpower(){
        return new SuperPower(this.constructor.name);
    }
}


let frog = new Frog();
let bat = new Bat();
let chicken = new Chicken();
let fox = new Fox();
let chimpanzee = new Chimpanzee();

console.log(frog.superpower.use_laser_vision());
console.log(bat.superpower.ultra_sound());
console.log(chicken.superpower.be_invisible());
console.log(fox);
console.log(chimpanzee);
