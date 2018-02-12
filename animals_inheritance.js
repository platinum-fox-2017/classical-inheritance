"use strict"

class Animal {
	constructor(name, legs, fingers) {
		this.name = name
		this.legs = legs
		this.fingers = fingers
		this.superPower = new SuperPower(this.name)
	}
}

class Frog extends Animal {
	constructor(color) {
		super('Frog', 2, 3)
		this.color = color
    this.unique = this.jump()
	}

	jump(jump) {
		return this.unique = 'I have jumping'
	}
}

class Bat extends Animal {
	constructor(eyeColor) {
		super('Bat', 2, 4)
		this.EyeColor = eyeColor
	}
}

class Dog extends Animal {
	constructor(dogSound) {
		super('Dog', 4, 4)
		this.Sound = dogSound
	}
}

class Chicken extends Animal {
	constructor(wings) {
		super('Chicken', 2, 4)
		this.wings = wings
	}
}

class SuperPower {
	constructor(name){
		this.name = name
	}

	use_laser_vision() {
		return `${this.name} using laser vision!`
	}

	be_invisible() {
		return `${this.name} being invisible!`
	}
}

let frog = new Frog('Green')
console.log(frog)
frog.jump()

let dechick = new Chicken('I have a wings')
console.log(dechick)

let bat = new Bat('Red')
console.log(bat)

let dogy = new Dog('gukguk')
console.log(dogy)
console.log(dogy.superPower.use_laser_vision());
