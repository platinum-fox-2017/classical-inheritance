"use strict"
//Release 0

class Animal {
    constructor(name,limbs,mouth,eyes,blood,legs,superpower){
        this.name = name || 'Animal X';
        this.limbs = limbs || 4;
        this.mouth = mouth || 1;
        this.eyes = eyes || 2;
        this.is_warm_blooded = blood === undefined ? true : false;
        this.num_legs = legs || 2;
        this.superpower = superpower === undefined ? 'None': new Superpower(name);
        
    }
}
// Release 1
class Superpower {
    constructor(name){
        this.name = name
    }
    awan_kinton(){
        return (`Awan kinton datanglah !!! ${this.name} memanggilmu !!!`);
    }
    custom_superpower(string){
        return string;
    }
}

class Frog extends Animal {
    constructor(name,limbs,mouth,eyes,blood,legs,gigi){
        super(name,limbs,mouth,eyes,blood,legs) 
        this.gigi = gigi;
    }
}
class Bat extends Animal {
    constructor(){
        super()
        super.name = 'Batman';
        super.limbs = 6;
    }
}
class Chimpanzee extends Animal {
    constructor(bulu,superpower,senjata){
        super()
        this.name = 'Son Goku'
        this.bulu = bulu;
        this.senjata = senjata;
        this.superpower = new Superpower(this.name);
    }
}
class Fox extends Animal {
    constructor(program){
        super()
        super.name = 'Platinum Fox';
        this.program ='Coding Bootcamp';
    }
}
class Chicken extends Animal {
    constructor(name,superpower,bau){
        super(name)
        this.bau = bau;
        this.superpower = new Superpower()

    }
}

let crazy_frog = new Frog('crazy_frog',null,4,null,false,4,20);
let batman = new Bat()
let kera_sakti = new Chimpanzee(100000,'tongkat ajaib')
let hacktiv8 = new Fox();
let kfc = new Chicken('kfc','bau banget');
console.log(crazy_frog);
console.log(batman);
console.log(kera_sakti);
console.log(hacktiv8);
console.log(kfc);
console.log(kera_sakti.superpower.awan_kinton());
console.log(kfc.superpower.custom_superpower('Ayo beli paket hemat! Lagi diskon!'))

// name,limbs,mouth,eyes,blood,legs