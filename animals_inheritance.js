"use strict"
class Animal{
  constructor(){
    this.num_legs=4
    this.species='mamalia'

  }

}

class Frog extends Animal{
  constructor(name){
    super()
    this.name=name
    this.superPower=new SuperPower(name)
  }
  set countLegs(legnew){
    this.num_legs=legnew
  }

  get countLegs(){
    return this.name+' punya '+this.num_legs+' kaki'
  }
}


class Horse extends Animal{
  constructor(name){
    super()
    this.name=name
    this.superPower=new SuperPower(name)
  }
   set specieSet(speciesnew){
     this.species=speciesnew
   }

   get specieSet(){
    return this.name+' merupakan binatang '+this.species
  }
}



class SuperPower{
  constructor(name){
    this.name=name
  }
  run_faster(){
    console.log(this.name+' mendapatkan tenaga untuk berlari kencang');
  }

  jump_higher(){
    console.log(this.name+' mendapatkan kaki yang kuat untuk loncat tinggi');
  }
}

var newFrog = new Frog('kodok')
var newHorse = new Horse('kuda')
newFrog.countLegs=2
console.log(newFrog.countLegs)
newFrog.specieSet='amphibi'
console.log(newHorse.specieSet)
newHorse.superPower.run_faster()
newFrog.superPower.jump_higher()
