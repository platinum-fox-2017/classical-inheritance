"use strict"
class Animal {
    constructor(){
     this._creator = 'God'
     this._superPower;   
     this._legs;
     this._name;
    }

    setsuperPower(string){
        this._superPower = string
        return this
    }

    setlegs(numb){
        this._legs = numb
        return this
    }

    setname(string){
        this._name = string
        return this
    }

    get name(){
        return this._name
    }

    get legs(){
        return this._legs
    }

    get superPower(){
        return this._superPower
    }
}

class Frog extends Animal{
    constructor(){
        super()
    }
}

class Bat extends Animal{
    constructor(){
        super()
    }
}
class Chimpanzee extends Animal{
    constructor(){
        super()
    }
}

class Fox extends Animal{
    constructor(){
        super()
    }
}

class Chicken extends Animal{
    constructor(){
        super()
    }
}

const chicken = new Chicken()
const fox = new Fox()
const chimpanzee = new Chimpanzee()
const bat = new Bat()
const frog = new Frog()

chicken.setname('Chicken').setlegs(2).setsuperPower('Petok petok')
console.log(`Hi I'am ${chicken.name} who have ${chicken.legs} leg and my superpower is ${chicken.superPower}`)

fox.setname('Fox').setlegs(4).setsuperPower('Night vision')
console.log(`Hi I'am ${fox.name} who have ${fox.legs} leg and my superpower is ${fox.superPower}`)

chimpanzee.setname('Chimpanzee').setlegs(2).setsuperPower('Gelantungan')
console.log(`Hi I'am ${chimpanzee.name} who have ${chimpanzee.legs} leg and my superpower is ${chimpanzee.superPower}`)

bat.setname('Bat').setlegs(2).setsuperPower('Sleep')
console.log(`Hi I'am ${bat.name} who have ${bat.legs} leg and my superpower is ${bat.superPower}`)

frog.setname('Frog').setlegs(4).setsuperPower('Spit')
console.log(`Hi I'am ${frog.name} who have ${frog.legs} leg and my superpower is ${frog.superPower}`)