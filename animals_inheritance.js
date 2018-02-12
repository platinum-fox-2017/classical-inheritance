"use strict"

class Animal {
	constructor(){
		this.name = ''
		this.num_legs = 2
		this.is_warmBlood = true
		this.is_fly = false
		this.super = new SuperPower()
		this.myPower = this.super.laser_vision()
		
	
	}
	save(){
		return `Halooo ....aku ${this.name} memiliki ${this.num_legs} kaki,
		apakah aku berdarah panas? jawabannya : ${this.is_warmBlood}
		apakah aku bisa terbang? jawabannya : ${this.is_fly}
		kekuatanku adalah ${this.myPower}`
	}

}

class Frog extends Animal{
	constructor(){
		super()
		this.num_legs = 4
		this.is_warmBlood = false
		this.name = 'Frog'
		this.myPower = this.super.be_invisible()
			
	}
}
class Cat extends Animal{
	constructor(){
		super()
		this.num_legs = 4
		this.name = 'Cat'
			
	}
}
class Chicken extends Animal{
	constructor(){
		super()
		this.name = 'Chicken'		
			
	}
}

class Eagle extends Animal{
	constructor(){
		super()
		this.is_fly = true
		this.name = 'Eagle'
		this.myPower = this.super.laser_vision()
			
	}
}

class SuperPower{
	constructor(){

	}
	laser_vision(){
		return 'Wuzzz...magical eyes'

	}
	be_invisible(){
		return `clingss....aku bisa menghilang`

	}
}

let babyFrog = new Frog()
console.log(babyFrog)
let neko = new Cat()
console.log(neko)
let chikin = new Chicken()
console.log(chikin)
let babyeagle = new Eagle()
console.log(babyFrog.save())
console.log(neko.save())
console.log(babyeagle.save())
// console.log(babyeagle.super.be_invisible())
// console.log(chikin.super.laser_vision())