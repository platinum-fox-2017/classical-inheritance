"use strict"

class Animal{
  constructor(num_legs,is_warm_blooded,breed_classification){
    this.num_legs = num_legs;
    this.is_warm_blooded = is_warm_blooded;
    this.breed_classification = breed_classification;
  }
}

class Superpower{
  constructor(super_jump,super_speed,super_strong){
    this.super_jump = super_jump;
    this.super_speed = super_speed;
    this.super_strong = super_strong;
  }

  superJump(){
    if(this.super_jump){
      return 'Yes, it has Super Jump!';
    } else {
      return 'No, its jump is normal';
    }
  }

  superSpeed(){
    if(this.super_speed){
      return 'Yes, it has Super Speed!';
    } else {
      return 'No, it is so slow :(';
    }
  }

  superStrong(){
    if(this.superStrong){
      return 'Yes, its Super Strong!';
    } else {
      return 'No, it is so weak :(';
    }
  }

}

class Rabbit extends Animal{
  constructor(num_legs,is_warm_blooded,breed_classification,super_jump,super_speed,super_strong){
    super(num_legs,is_warm_blooded,breed_classification);
    this.superPower = new Superpower(super_jump,super_speed,super_strong);
  }
}

class Ant extends Animal{
  constructor(num_legs,is_warm_blooded,breed_classification,super_jump,super_speed,super_strong){
    super(num_legs,is_warm_blooded,breed_classification);
    this.superPower = new Superpower(super_jump,super_speed,super_strong);
  }
}

class Bird extends Animal{
  constructor(num_legs,is_warm_blooded,breed_classification,super_jump,super_speed,super_strong){
    super(num_legs,is_warm_blooded,breed_classification);
    this.superPower = new Superpower(super_jump,super_speed,super_strong);
  }
}

class Cat extends Animal{
  constructor(num_legs,is_warm_blooded,breed_classification,super_jump,super_speed,super_strong){
    super(num_legs,is_warm_blooded,breed_classification);
    this.superPower = new Superpower(super_jump,super_speed,super_strong);
  }
}


//1. masukkan keterangan dari setiap binatang: jumlah kaki, darah panas/dingin, cara berkembang biak,
//   kekuatan lompatan super, kecepatan super, dan kekuatan super
//2. akan ditampilkan keterangan sesuai pembagian yang telah dituliskan

let rabbit = new Rabbit(2,true,'Vivipar',true,true,false);
let ant = new Ant(6,true,'Ovipar',false,true,true);
let bird = new Bird(2,true,'Ovipar',false,true,false);
let cat = new Cat(4,true,'Vivipar',true,true,true);

console.log(rabbit);
console.log(rabbit.superPower.superJump());
console.log('--------------------------');
console.log(ant);
console.log(ant.superPower.superStrong());
console.log('--------------------------');
console.log(bird);
console.log(bird.superPower.superSpeed());
console.log('--------------------------');
console.log(cat);
console.log(rabbit.superPower.superJump());
