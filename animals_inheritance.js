"use strict"

class Animal{
  constructor(num_legs,is_warm_blooded,breed_classification){
    this.num_legs = num_legs;
    this.is_warm_blooded = is_warm_blooded;
    this.breed_classification = breed_classification;
  }
}

class Rabbit extends Animal{
  constructor(num_legs,is_warm_blooded,breed_classification){
    super(num_legs,is_warm_blooded,breed_classification);
  }
}

class Ant extends Animal{
  constructor(num_legs,is_warm_blooded,breed_classification){
    super(num_legs,is_warm_blooded,breed_classification);
  }
}

class Bird extends Animal{
  constructor(num_legs,is_warm_blooded,breed_classification){
    super(num_legs,is_warm_blooded,breed_classification);
  }
}

class Cat extends Animal{
  constructor(num_legs,is_warm_blooded,breed_classification){
    super(num_legs,is_warm_blooded,breed_classification);
  }
}

let rabbit = new Rabbit(2,true,'Vivipar');
let ant = new Ant(6,true,'Ovipar');
let bird = new Bird(2,true,'Ovipar');
let cat = new Cat(4,true,'Vivipar');

console.log(rabbit);
console.log(ant);
console.log(bird);
console.log(cat);
